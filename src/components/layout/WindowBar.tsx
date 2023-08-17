import { appWindow } from '@tauri-apps/api/window'
import { FiMaximize, FiMinus, FiX } from 'solid-icons/fi'

type WindowAction = 'drag' | 'minimize' | 'maximize' | 'closeup'

export const WindowBar = () => {
  const handleAction = async (type: WindowAction) => {
    switch (type) {
      case 'drag':
        return await appWindow.startDragging()
      case 'closeup':
        return await appWindow.close()
      case 'maximize':
        return await appWindow.toggleMaximize()
      case 'minimize':
        return await appWindow.minimize()
    }
  }

  return (
    <header class='absolute left-0 top-0 flex h-10 w-full select-none items-center justify-between transition duration-300 dark:bg-dark-hard-dark-blue'>
      <div class='flex w-11/12 cursor-default items-center pl-4' onMouseDown={[handleAction, 'drag']}>
        <img src='/icons/Logo.svg' class='h-5 w-5' />
        <span class='pl-3 text-sm text-light-default'>Todo App</span>
      </div>

      <div class='flex h-full items-center'>
        <FiMinus class='windowbar-icon' onClick={[handleAction, 'minimize']} />
        <FiMaximize class='windowbar-icon' onClick={[handleAction, 'maximize']} />
        <FiX class='windowbar-icon hover:bg-error dark:hover:bg-error' onClick={[handleAction, 'closeup']} />
      </div>
    </header>
  )
}
