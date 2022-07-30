import { appWindow } from '@tauri-apps/api/window'
import { createSignal } from 'solid-js'

import type { ThemeTypes } from '../types/Theme'

const systemTheme = await appWindow.theme()
const appTheme = localStorage.getItem('theme') as ThemeTypes

export const [theme, setSignalTheme] = createSignal<ThemeTypes>(
  appTheme === 'system' ? systemTheme : appTheme
)

export const setTheme = (currentTheme: ThemeTypes): void => {
  setSignalTheme(currentTheme)
  document.body.setAttribute('theme', currentTheme)
  return window.localStorage.setItem('theme', currentTheme)
}

document.body.setAttribute('theme', theme())
