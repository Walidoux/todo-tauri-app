import { Motion } from '@motionone/solid'
import { FiArchive, FiGithub } from 'solid-icons/fi'
import type { Component, Setter } from 'solid-js'
import { For, onCleanup } from 'solid-js'

import { data } from '../../data'
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
      redirect: data['github-author']
    },
    {
      text: 'Project repository',
      icon: <FiArchive />,
      redirect: data['github-repo']
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
      class='absolute -left-28 top-12 z-50 w-72 overflow-hidden rounded-2xl bg-light-hard-gray-light px-5 py-3 shadow-2xl transition-colors duration-300 dark:bg-dark-hard-desaturated-dark-blue'>
      <div class='border-b border-b-dark-hover-grayish-light-blue pb-3 transition duration-300 dark:border-b-dark-hover-hard-grayish-dark-blue'>
        <h5 class='text-sm font-medium text-dark-hard-grayish-dark-blue transition duration-300 dark:text-light-grayish-dark-blue'>
          Theme
        </h5>
        <Slider />
      </div>

      <div class='flex flex-col justify-start pt-2'>
        <For each={dropdownList}>
          {(item) => {
            return (
              <a
                class='pointer light-hard-gray-light flex items-center justify-start py-[2px] px-1 text-dark-hard-desaturated-dark-blue no-underline transition hover:translate-x-2 hover:opacity-75 dark:text-dark-grayish-dark-blue'
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
