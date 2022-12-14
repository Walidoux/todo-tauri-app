import { Motion, Presence } from '@motionone/solid'
import { FiMoon, FiSettings, FiSun } from 'solid-icons/fi'
import type { Component } from 'solid-js'
import { For, Show } from 'solid-js'

import { setTheme, theme } from '../../stores/theme'
import type { ThemeProps } from '../../types/Theme'
import { capitalize } from '../../utils/capitalize'

export const Slider: Component = () => {
  const slideItems: ThemeProps = [
    {
      name: 'light',
      icon: <FiSun />,
      selected: theme() === 'light'
    },
    {
      name: 'system',
      icon: <FiSettings />,
      selected: theme() === 'system'
    },
    {
      name: 'dark',
      icon: <FiMoon />,
      selected: theme() === 'dark'
    }
  ]

  return (
    <ul class='my-1 grid h-8 list-none grid-cols-3 rounded-lg bg-light-hard-grayish-light-blue transition duration-300 dark:bg-dark-desaturated-dark-blue'>
      <For each={slideItems}>
        {(item) => {
          return (
            <Motion.li
              onClick={() => setTheme(item.name)}
              class='group relative z-10 flex cursor-pointer select-none items-center justify-center py-1 text-sm text-dark-hover-hard-grayish-dark-blue transition duration-300 dark:text-dark-grayish-dark-blue'>
              <span class='mr-1 flex items-center justify-center'>
                {item.icon}
              </span>
              <span class='font-medium group-odd:w-2/5'>
                {capitalize(item.name)}
              </span>

              <Presence exitBeforeEnter>
                <Show when={theme() === item.name}>
                  <Motion.div
                    class='pointer-events-none absolute top-1/2 left-1/2 -z-10 h-3/4 w-full -translate-x-1/2 -translate-y-1/2 rounded-lg bg-light-grayish-light-blue group-odd:w-[90%] dark:bg-dark-light-desaturated-dark-blue'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                </Show>
              </Presence>
            </Motion.li>
          )
        }}
      </For>
    </ul>
  )
}
