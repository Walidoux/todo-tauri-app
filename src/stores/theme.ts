import type { Theme } from '@tauri-apps/api/window'
import { appWindow } from '@tauri-apps/api/window'
import { createSignal } from 'solid-js'

export type ThemeTypes = Theme | 'system'

const systemTheme = await appWindow.theme()
const appTheme = localStorage.getItem('theme') as ThemeTypes

export const [theme, setSignalTheme] = createSignal<ThemeTypes>(
  appTheme === 'system' ? systemTheme ?? 'light' : appTheme
)

export const setTheme = (currentTheme: ThemeTypes): void => {
  setSignalTheme(currentTheme)
  document.body.setAttribute('theme', currentTheme)
  return window.localStorage.setItem('theme', currentTheme)
}

// eslint-disable-next-line solid/reactivity
document.body.setAttribute('theme', theme())
