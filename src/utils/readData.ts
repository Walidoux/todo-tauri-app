import { BaseDirectory, readTextFile } from '@tauri-apps/api/fs'

export const readData = async (path: string) => {
  return await readTextFile(path, {
    dir: BaseDirectory.App
  })
}
