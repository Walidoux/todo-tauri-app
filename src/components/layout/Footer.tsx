import { createSignal } from 'solid-js'
import { FiGithub } from 'solid-icons/fi'
import classNames from 'clsx'

import { GITHUB } from '../../tools'

export const Footer = () => {
  const [version, setVersion] = createSignal<string>()

  fetch('https://api.github.com/repos/Walidoux/todo-tauri-app/releases/latest')
    .then(async (res) => await res.json())
    .then((res: { tag_name: string }) => setVersion(res.tag_name.match(/v\d+\.\d+\.\d+/i)?.[0]))
    .catch((error) => console.log(error))

  return (
    <footer
      class={classNames(
        'mt-4 flex cursor-default select-none items-center justify-center',
        'text-light-hard-grayish-dark-blue opacity-70 transition duration-300 dark:text-dark-hard-grayish-dark-blue'
      )}>
      <span class='mr-1 flex items-center gap-x-1'>
        <FiGithub class='mb-[2px] mr-1' />
        {version()}.
      </span>
      Contribute for project development
      <a
        href={GITHUB.repository}
        target='_blank'
        rel='noreferrer'
        class='ml-1 text-dark-hard-desaturated-dark-blue transition duration-300 hover:opacity-50 dark:text-light-grayish-dark-blue'>
        here.
      </a>
    </footer>
  )
}
