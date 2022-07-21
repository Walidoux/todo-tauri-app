import { createSignal, Show } from 'solid-js'
import { Presence } from '@motionone/solid'
import { Dropdown } from '../../design/Dropdown/Dropdown'
import type { Component } from 'solid-js/types/render/component'

import styles from './Header.module.scss'
import classNames from 'classnames'
import { FiSliders } from 'solid-icons/fi'

export const Header: Component = () => {
  const [activeDropdown, setActiveDropdown] = createSignal(false)

  let buttonTriggerer: Element = null
  const handleDropdown = () => setActiveDropdown(!activeDropdown())

  return (
    <header class={styles.header}>
      <div class={styles.container}>
        <h1 class={styles.title}>Todo</h1>
        <div class={styles['dropdown-container']}>
          <button
            ref={(el) => (buttonTriggerer = el)}
            onclick={handleDropdown}
            class={classNames(styles.button, {
              [styles.active]: activeDropdown()
            })}>
            <FiSliders />
            <span class={styles.text}>Settings</span>
          </button>

          <Presence>
            <Show when={activeDropdown()}>
              <Dropdown
                classList={styles.dropdown}
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
