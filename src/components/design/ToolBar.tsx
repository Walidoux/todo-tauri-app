import classNames from 'clsx'
import { For } from 'solid-js'

import type { Filter } from '../../stores'
import { filter as currentFilter, filter, handleFilter, setTodos, todos } from '../../stores'
import { clearCompletedTodos } from '../../tools'

export const ToolBar = () => {
  const handleClearCompleted = async () => {
    await clearCompletedTodos()
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed))
  }

  return (
    <section
      class={classNames(
        { 'rounded-b-lg': todos().length > 0, 'rounded-lg': todos().length === 0 },
        'relative flex h-[60px] items-center justify-between bg-light-hard-gray-light px-8 font-medium',
        'text-dark-grayish-dark-blue transition-colors duration-300 dark:bg-dark-hard-desaturated-dark-blue'
      )}>
      <span class='cursor-default select-none'>
        {filter() !== 'Completed'
          ? `${todos().filter((todo) => !todo.completed).length} todo(s) left`
          : `${todos().filter((todo) => todo.completed).length} todo(s) completed`}
      </span>
      <ul class='flex h-full list-none items-center justify-center'>
        <For each={['All', 'Active', 'Completed'] as Filter[]}>
          {(filter) => (
            <li
              onClick={[handleFilter, filter]}
              class={classNames(
                { '!text-primary-brightBlue': filter === currentFilter() },
                'mx-1 flex h-full cursor-pointer select-none items-center justify-center px-1',
                'transition duration-200 hover:text-light-grayish-dark-blue'
              )}>
              {filter}
            </li>
          )}
        </For>
      </ul>

      <p
        onClick={handleClearCompleted}
        class='flex h-full cursor-pointer select-none items-center justify-center transition duration-200 hover:text-light-grayish-dark-blue'>
        Clear completed
      </p>
    </section>
  )
}
