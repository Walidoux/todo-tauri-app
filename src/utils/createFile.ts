import { BaseDirectory, writeFile } from '@tauri-apps/api/fs'

export const createFile = async (content: string = undefined) => {
  try {
    await writeFile(
      { contents: content, path: 'todos/list.json' },
      { dir: BaseDirectory.App }
    )
  } catch (err) {
    console.log(err)
  }
}
