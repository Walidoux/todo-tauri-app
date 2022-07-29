import { Motion } from '@motionone/solid'
import { FiArchive, FiGithub } from 'solid-icons/fi'
import type { Component, Setter } from 'solid-js'
import { For, onCleanup } from 'solid-js'

import { Slider } from './Slider'

export interface DropdownProps {
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
      class='absolute -left-28 top-12 z-10 w-72 overflow-hidden rounded-2xl bg-light-hard-gray-light px-5 py-3 drop-shadow-lg'>
      <div class='border-b border-b-dark-hover-grayish-light-blue pb-3'>
        <h5 class='text-sm font-semibold tracking-widest text-light-grayish-dark-blue'>
          Theme
        </h5>
        <Slider />
      </div>

      <div class='flex flex-col justify-start pt-1'>
        <For each={dropdownList}>
          {(item) => {
            return (
              <a
                class='pointer light-hard-gray-light flex items-center justify-start py-[2px] px-1 no-underline transition hover:translate-x-2 hover:opacity-75'
                href={item.redirect}
                target='_blank'>
                {item.icon}
                <span class='ml-2 font-medium'>{item.text}</span>
              </a>
            )
          }}
        </For>
      </div>
    </Motion.ul>
  )
}
