import classNames from 'classnames'
import { Component, For } from 'solid-js'

import {
  clearCompletedTodos,
  todos,
  todosFilter,
  toggleFilter
} from '../../../stores/todos'
import type { TodoFilter } from '../../../types/Todo'

export const Footer: Component = () => {
  const capitalize = (value: string) => value[0].toUpperCase() + value.slice(1)

  return (
    <footer
      class={classNames(
        'relative flex h-[60px] items-center justify-between bg-light-hard-gray-light px-8 font-medium text-dark-grayish-dark-blue transition-colors duration-300 dark:bg-dark-hard-desaturated-dark-blue',
        {
          'rounded-b-lg': todos.current.length > 0,
          'rounded-lg': todos.current.length === 0
        }
      )}>
      {(todosFilter() === 'all'
        ? todos.current.length
        : todos.filtered.length) + " todo's left"}
      <ul class='flex h-full list-none items-center justify-center'>
        <For each={['all', 'active', 'completed'] as TodoFilter[]}>
          {(filter: TodoFilter) => (
            <li
              class={classNames(
                'mx-1 flex h-full cursor-pointer select-none items-center justify-center px-1 transition duration-200 hover:text-light-grayish-dark-blue',
                {
                  '!text-primary-brightBlue': filter === todosFilter()
                }
              )}
              onClick={() => toggleFilter(filter)}>
              {capitalize(filter)}
            </li>
          )}
        </For>
      </ul>
      <p
        class='flex h-full cursor-pointer select-none items-center justify-center transition duration-200 hover:text-light-grayish-dark-blue'
        onClick={clearCompletedTodos}>
        Clear completed
      </p>
    </footer>
  )
}
