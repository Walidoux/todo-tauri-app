use specta::Type;
use serde::{Deserialize, Serialize};

pub const DATA_FILE: &str = "todos.json";

#[derive(Debug, Deserialize, Serialize, Type)]
pub struct ITodo {
  name: String,
  completed: bool,
  id: String
}

impl ITodo {
  pub fn id(&self) -> &str {
      &self.id
  }

  pub fn completed(&self) -> &bool {
    &self.completed
  }
}
