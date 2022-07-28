import { Presence } from '@motionone/solid'
import classNames from 'classnames'
import { FiSliders } from 'solid-icons/fi'
import { createSignal, Show } from 'solid-js'
import type { Component } from 'solid-js/types/render/component'

import { Dropdown } from '../design/Dropdown'

export const Header: Component = () => {
  const [activeDropdown, setActiveDropdown] = createSignal(false)

  let buttonTriggerer: Element = null
  const handleDropdown = () => setActiveDropdown(!activeDropdown())

  return (
    <header class='bg-mobile-light bg-cover transition-all duration-300 dark:bg-mobile-dark md:bg-desktop-light md:dark:bg-desktop-dark'>
      <div class='mx-auto flex h-72 max-w-[600px] items-start justify-between p-10 pt-16'>
        <h1 class='select-none text-4xl font-semibold uppercase tracking-[15px] text-light-hard-gray-light'>
          Todo
        </h1>
        <div class='relative'>
          <button
            ref={(el) => (buttonTriggerer = el)}
            onclick={handleDropdown}
            class={classNames(
              'relative flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full bg-light-hard-gray-light font-medium outline-none drop-shadow-xl transition duration-300 active:scale-90 dark:bg-dark-hard-desaturated-dark-blue',
              { 'scale-90 drop-shadow-none': activeDropdown() }
            )}>
            <FiSliders class='text-light-hard-grayish-dark-blue transition-colors duration-300 dark:text-light-grayish-light-blue' />
          </button>

          <Presence>
            <Show when={activeDropdown()}>
              <Dropdown
                activeMenu={activeDropdown()}
                handler={setActiveDropdown}
                triggerer={buttonTriggerer}
              />
            </Show>
          </Presence>
        </div>
      </div>
    </header>
  )
}
