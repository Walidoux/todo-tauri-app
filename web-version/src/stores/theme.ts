import { createStore } from 'solid-js/store'
import type { JSX } from 'solid-js/web/types/jsx'

export type ThemeTypes = 'dark' | 'light' | 'system'
export type ThemeProps = Array<{
  name: ThemeTypes
  icon: JSX.Element
  selected: boolean
}>

const darkSystemTheme = window.matchMedia('(prefers-color-scheme: dark)')

export const [theme, setThemeSignal] = createStore({
  theme:
    localStorage.getItem('theme') != null
      ? localStorage.getItem('theme') === 'system'
        ? 'system'
        : localStorage.getItem('theme')
      : darkSystemTheme.matches
      ? 'dark'
      : 'light'
})

export const setTheme = (currentTheme: ThemeTypes): void => {
  setThemeSignal('theme', currentTheme)
  document.body.setAttribute('theme', theme.theme)
  return window.localStorage.setItem('theme', currentTheme)
}

document.body.setAttribute('theme', theme.theme)
