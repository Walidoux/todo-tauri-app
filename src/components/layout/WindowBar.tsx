import { appWindow } from '@tauri-apps/api/window'
import { FiMaximize, FiMinus, FiX } from 'solid-icons/fi'
import type { Component } from 'solid-js'

export const WindowBar: Component = () => (
  <header class='absolute top-0 left-0 flex h-10 w-full select-none items-center transition duration-300 dark:bg-dark-hard-dark-blue'>
    <div
      class='flex w-11/12 cursor-default items-center pl-4'
      onmousedown={() => appWindow.startDragging()}>
      <img src='/icons/windowbar-icon.svg' class='h-5 w-5' />
      <span class='pl-3 text-sm text-light-default'>Todo App</span>
    </div>
    <div class='flex h-full items-center'>
      <FiMinus class='windowbar-icon' onclick={() => appWindow.minimize()} />
      <FiMaximize
        class='windowbar-icon'
        onclick={() => appWindow.toggleMaximize()}
      />
      <FiX
        class='windowbar-icon hover:bg-error'
        onclick={() => appWindow.close()}
      />
    </div>
  </header>
)
