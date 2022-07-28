import { BaseDirectory, writeTextFile } from '@tauri-apps/api/fs'

export const writeData = async (content: string) => {
  try {
    await writeTextFile('todos/list.json', content, {
      dir: BaseDirectory.App
    })
  } catch (err) {
    console.log(err)
  }
}
