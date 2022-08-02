import { BaseDirectory, createDir, readDir } from '@tauri-apps/api/fs'
import { appDir } from '@tauri-apps/api/path'

import { createFile } from './createFile'

const fileExists = async (filename: string, path: string = '') => {
  const dir = (await appDir()) + path
  const files = await readDir(dir)
  if (!files.find((currentFiles) => currentFiles.name === filename))
    return false
  return true
}

export const initConfig = async () => {
  try {
    await createDir('todos', { dir: BaseDirectory.App, recursive: true })
    if (!(await fileExists('list.json', 'todos')))
      return createFile('todos/list.json', '[]')
  } catch (err) {
    console.log(err)
  }
}
