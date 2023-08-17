import classNames from 'clsx'
import { FiArchive, FiGithub, FiSliders } from 'solid-icons/fi'
import { For, createSignal } from 'solid-js'

import { ExternalEventWrapper } from '../system/ExternalEventWrapper'
import { AnimatedWrapper } from '../system'
import { Animations, GITHUB } from '../../tools'
import { Slider } from '../design'

const dropdownList = [
  {
    text: 'Personal Github',
    icon: <FiGithub />,
    redirect: GITHUB.author
  },
  {
    text: 'Project repository',
    icon: <FiArchive />,
    redirect: GITHUB.repository
  }
]

export const Header = () => {
  const [activeDropdown, setActiveDropdown] = createSignal(false)

  return (
    <header class='select-none bg-mobile-light bg-cover transition-all duration-300 dark:bg-mobile-dark md:bg-desktop-light md:dark:bg-desktop-dark'>
      <div class='mx-auto flex h-72 max-w-[700px] items-start justify-between p-10 pt-20'>
        <h1 class='cursor-default select-none text-4xl font-medium uppercase tracking-[10px] text-light-hard-gray-light'>
          Todo
        </h1>

        <ExternalEventWrapper onOutsideClick={() => setActiveDropdown(false)} class='relative'>
          <button
            onClick={() => setActiveDropdown(!activeDropdown())}
            class={classNames(
              'relative flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full',
              'bg-light-hard-gray-light font-medium outline-none drop-shadow-xl transition-all duration-300',
              'active:scale-90 dark:bg-dark-hard-desaturated-dark-blue',
              { 'scale-90 drop-shadow-none': activeDropdown() }
            )}>
            <FiSliders class='text-light-hard-grayish-dark-blue transition-all duration-300 dark:text-light-grayish-light-blue' />
          </button>

          <AnimatedWrapper
            when={activeDropdown()}
            transition={{ duration: 0.2 }}
            {...Animations.fadeInOut({ scaleX: [0, 1, 0], scaleY: [0, 1, 0], y: [-100, 0, -100] })}
            class={classNames(
              'absolute -left-28 top-12 z-50 w-72 overflow-hidden rounded-2xl bg-light-hard-gray-light',
              'px-5 py-3 shadow-2xl transition-colors duration-300 dark:bg-dark-hard-desaturated-dark-blue'
            )}>
            <Slider />

            <div class='flex flex-col justify-start pt-2'>
              <For each={dropdownList}>
                {(item) => (
                  <a
                    href={item.redirect}
                    target='_blank'
                    class={classNames(
                      'pointer light-hard-gray-light flex items-center justify-start px-1 py-[2px]',
                      'text-dark-hard-desaturated-dark-blue no-underline transition hover:translate-x-2',
                      'hover:opacity-75 dark:text-dark-grayish-dark-blue'
                    )}>
                    {item.icon}
                    <span class='ml-2 font-medium'>{item.text}</span>
                  </a>
                )}
              </For>
            </div>
          </AnimatedWrapper>
        </ExternalEventWrapper>
      </div>
    </header>
  )
}
