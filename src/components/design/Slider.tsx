import { Component, For, Show } from 'solid-js'
import { FiMoon, FiSettings, FiSun } from 'solid-icons/fi'
import { Motion, Presence } from '@motionone/solid'
import { ThemeProps, setTheme, theme } from '../../stores/theme'

export const Slider: Component = () => {
  const slideItems: ThemeProps = [
    {
      name: 'light',
      icon: <FiSun />,
      selected: theme.theme === 'light'
    },
    {
      name: 'system',
      icon: <FiSettings />,
      selected: theme.theme === 'system'
    },
    {
      name: 'dark',
      icon: <FiMoon />,
      selected: theme.theme === 'dark'
    }
  ]

  const capitalize = (value: string): string =>
    value[0].toUpperCase() + value.slice(1)

  return (
    <ul class='mt-1 grid h-8 list-none grid-cols-3 rounded-lg bg-light-hard-grayish-light-blue'>
      <For each={slideItems}>
        {(item) => {
          return (
            <Motion.li
              onClick={() => setTheme(item.name)}
              class='group relative z-10 flex cursor-pointer select-none items-center justify-center py-1 text-sm text-dark-hover-hard-grayish-dark-blue'>
              <span class='mr-1 flex items-center justify-center'>
                {item.icon}
              </span>
              <span class='font-medium group-odd:w-2/5'>
                {capitalize(item.name)}
              </span>

              <Presence exitBeforeEnter>
                <Show when={theme.theme === item.name}>
                  <Motion.div
                    class='pointer-events-none absolute top-1/2 left-1/2 -z-10 h-3/4 w-full -translate-x-1/2 -translate-y-1/2 rounded-lg bg-light-grayish-light-blue group-odd:w-[90%]'
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
