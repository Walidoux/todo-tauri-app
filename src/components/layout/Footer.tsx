import type { Component } from 'solid-js'

import { data } from '../../data'
import { Emoji } from '../design/Emoji'

export const Footer: Component = () => (
  <footer class='absolute bottom-0 left-0 right-0 flex h-16 items-center justify-center text-center'>
    <p class='text-light-hard-grayish-dark-blue opacity-70 transition duration-300 dark:text-dark-hard-grayish-dark-blue'>
      Application has been released recently on version 1.0.0
      <Emoji class='ml-2' label='Deploying emoji' symbol='🚀' /> <br />
      Your feedbacks are welcome through{' '}
      <a
        href={data['github-repo']}
        target='_blank'
        class='text-dark-hard-desaturated-dark-blue transition duration-300 hover:opacity-50 dark:text-light-grayish-dark-blue'>
        Github.
      </a>
    </p>
  </footer>
)
