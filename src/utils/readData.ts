import { BaseDirectory, readTextFile } from '@tauri-apps/api/fs'

export const readData = async () => {
  return await readTextFile(`./todos/list.json`, {
    dir: BaseDirectory.App
  })
}
