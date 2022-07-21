import classNames from 'classnames'
import { Motion, Presence } from '@motionone/solid'
import { FiMoon, FiSettings, FiSun } from 'solid-icons/fi'
import { Component, For, Show } from 'solid-js'
import { setTheme, theme, ThemeProps } from '../../../stores/theme'

import styles from './Slider.module.scss'

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
    <ul class={styles.container}>
      <For each={slideItems}>
        {(item) => {
          return (
            <Motion.li
              onClick={() => setTheme(item.name)}
              class={classNames(styles.item, {
                [styles.active]: theme.theme === item.name
              })}>
              <span class={styles.icon}>{item.icon}</span>
              <span class={styles.name}>{capitalize(item.name)}</span>

              <Presence exitBeforeEnter>
                <Show when={theme.theme === item.name}>
                  <Motion.div
                    class={styles['selection-bar']}
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
