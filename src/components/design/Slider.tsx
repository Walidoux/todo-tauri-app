import { Motion } from '@motionone/solid'
import { FiMoon, FiSettings, FiSun } from 'solid-icons/fi'
import type { JSX } from 'solid-js'
import { For } from 'solid-js'
import classNames from 'clsx'

import { setTheme, theme, type ThemeTypes } from '../../stores/theme'

export const Slider = () => {
  const slideItems: Array<{ name: ThemeTypes; icon: JSX.Element }> = [
    { name: 'light', icon: <FiSun /> },
    { name: 'system', icon: <FiSettings /> },
    { name: 'dark', icon: <FiMoon /> }
  ]

  return (
    <ul
      class={classNames(
        'relative my-1 grid h-8 list-none grid-cols-3 rounded-lg border-b border-b-dark-hover-grayish-light-blue bg-light-hard-grayish-light-blue',
        'transition duration-300 dark:border-b-dark-hover-hard-grayish-dark-blue dark:bg-dark-desaturated-dark-blue'
      )}>
      <For each={slideItems}>
        {(item) => (
          <Motion.li
            onClick={() => setTheme(item.name)}
            class={classNames(
              'group relative z-10 flex cursor-pointer select-none items-center justify-center',
              'py-1 text-sm text-dark-hover-hard-grayish-dark-blue transition duration-300 dark:text-dark-grayish-dark-blue'
            )}>
            <span class='mr-1 flex items-center justify-center'>{item.icon}</span>
            <span class='font-medium group-odd:w-2/5'>{item.name}</span>
          </Motion.li>
        )}
      </For>

      <span
        class={classNames(
          { 'left-1 w-[75px]': theme() === 'light' },
          { 'left-[82px] w-[85px]': theme() === 'system' },
          { 'left-[170px] w-[70px]': theme() === 'dark' },
          'pointer-events-none absolute top-1/2 h-3/4 w-[75px] -translate-y-1/2 transition-all duration-150',
          'rounded-lg bg-light-grayish-light-blue group-odd:w-[90%] dark:bg-dark-light-desaturated-dark-blue'
        )}
      />
    </ul>
  )
}
