import type { Theme } from '@tauri-apps/api/window'
import type { JSX } from 'solid-js/web/types/jsx'

export type ThemeTypes = Theme | 'system'
export type ThemeProps = Array<{
  name: ThemeTypes
  icon: JSX.Element
  selected: boolean
}>
