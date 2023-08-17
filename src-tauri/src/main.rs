#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod utils;

use tauri::api::path::{data_dir, app_data_dir};
use utils::{DATA_FILE, ITodo};
use std::fs::File;

macro_rules! tauri_handlers {
	($($name:path),+) => {{
		#[cfg(debug_assertions)]
    tauri_specta::ts::export(specta::collect_types![$($name),+], "../src/tools/commands.ts").unwrap();
		tauri::generate_handler![$($name),+]
	}};
}

fn main() {
  tauri::Builder::default()
  .setup(|app| {
    let identifier_path = data_dir().unwrap().display().to_string() + &app.config().tauri.bundle.identifier;

    let _data_dir = match app_data_dir(&app.config()) {
      None => std::fs::create_dir(identifier_path),
      Some(dir) => {
        let data_path = dir.join(DATA_FILE);

        if !data_path.exists() {
          let file = std::fs::File::create(data_path).unwrap();
          let mut writer = std::io::BufWriter::new(file);
          serde_json::to_writer(&mut writer, &Vec::<()>::new()).unwrap();

          Ok(())
        } else { Ok(()) }
      }
    };

    Ok(())
  })
    .invoke_handler(tauri_handlers![add_todo, remove_todo, fetch_todos, update_todos, toggle_todo, clear_completed_todos])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
#[specta::specta]
fn add_todo (todo: ITodo) {
  let mut todos = fetch_todos();

  todos.push(todo);
  update_todos(todos);
}

#[tauri::command]
#[specta::specta]
fn toggle_todo (todo: ITodo) {
  let mut todos = fetch_todos();
  let index = todos.iter().position(|r| r.id() == todo.id()).unwrap();
  let _ = std::mem::replace(&mut todos[index], todo);

  update_todos(todos)
}

#[tauri::command]
#[specta::specta]
fn update_todos (todos: Vec<ITodo>) {
  let data_dir = app_data_dir(tauri::generate_context!().config()).unwrap();
  let file = File::options().write(true).truncate(true).open(data_dir.join(DATA_FILE)).unwrap();
  let mut writer = std::io::BufWriter::new(&file);

  serde_json::to_writer(&mut writer, &todos).unwrap();
}

#[tauri::command]
#[specta::specta]
fn clear_completed_todos () {
  let mut todos = fetch_todos();

  todos.retain(|value| *value.completed() == false);

  println!("{:?}", todos);
  update_todos(todos);
}

#[tauri::command]
#[specta::specta]
fn remove_todo (todo: ITodo) {
  let mut todos = fetch_todos();

  todos.retain(|value| value.id() != todo.id());
  update_todos(todos);
}

#[tauri::command]
#[specta::specta]
fn fetch_todos () -> Vec<ITodo> {
  let data_dir = app_data_dir(tauri::generate_context!().config()).unwrap();
  let file = File::options().read(true).open(data_dir.join(DATA_FILE)).unwrap();
  let reader = std::io::BufReader::new(file);

  return serde_json::from_reader(reader).unwrap();
}
