import classNames from 'classnames'
import { Motion } from '@motionone/solid'
import { For, onCleanup } from 'solid-js'
import type { Component, Setter } from 'solid-js'
import { Slider } from '../Slider/Slider'
import { FiArchive, FiGithub } from 'solid-icons/fi'

import styles from './Dropdown.module.scss'

export interface DropdownProps {
  classList?: string
  activeMenu: boolean
  handler: Setter<boolean>
  triggerer: Element
}

export const Dropdown: Component<DropdownProps> = (props) => {
  let dropdownComponent: HTMLUListElement = null

  const dropdownList = [
    {
      text: 'Personal Github',
      icon: <FiGithub />,
      redirect: 'https://github.com/Walidoux'
    },
    {
      text: 'Challenge repository',
      icon: <FiArchive />,
      redirect: 'https://github.com/Walidoux/tauri-todo-app'
    }
  ]

  const clickListener = (event: MouseEvent): boolean =>
    dropdownComponent.contains(event.target as Node) ||
    props.triggerer.contains(event.target as Node)
      ? null
      : props.handler(false)

  const keyListener = (event: KeyboardEvent): boolean =>
    event.key === 'Escape' ? props.handler(false) : null

  window.addEventListener('click', clickListener)
  window.addEventListener('keyup', keyListener)
  onCleanup(() => {
    window.removeEventListener('click', clickListener)
    window.removeEventListener('keyup', keyListener)
  })

  return (
    <Motion.ul
      ref={(el) => (dropdownComponent = el)}
      initial={{ opacity: 0, scaleX: 0, scaleY: 0, y: -100 }}
      animate={{ opacity: 1, scaleX: 1, scaleY: 1, y: 0 }}
      exit={{ opacity: 0, scaleX: 0, scaleY: 0, y: -100 }}
      transition={{ duration: 0.2 }}
      class={classNames(props.classList, styles.dropdown)}>
      <div class={styles.container}>
        <h5 class={styles.title}>Theme</h5>
        <Slider />
      </div>

      <div class={styles['list-items']}>
        <For each={dropdownList}>
          {(item) => {
            return (
              <a class={styles.item} href={item.redirect} title='_blank'>
                {item.icon}
                <span class={styles.text}>{item.text}</span>
              </a>
            )
          }}
        </For>
      </div>
    </Motion.ul>
  )
}
