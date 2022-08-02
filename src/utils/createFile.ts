import { BaseDirectory, writeFile } from '@tauri-apps/api/fs'

export const createFile = async (path: string, content?: string) => {
  try {
    await writeFile({ contents: content, path }, { dir: BaseDirectory.App })
  } catch (err) {
    console.log(err)
  }
}
