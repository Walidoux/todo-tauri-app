import { Component, For } from 'solid-js'
import {
  TodoFilter,
  clearCompletedTodos,
  todos,
  todosFilter,
  toggleFilter
} from '../../../stores/todos'

import classNames from 'classnames'

export const Footer: Component = () => {
  const capitalize = (value: string) => value[0].toUpperCase() + value.slice(1)

  return (
    <footer class='relative flex h-[60px] items-center justify-between rounded-b-lg bg-primary-brightBlue px-8 font-medium text-dark-hard-desaturated-dark-blue'>
      {(todosFilter() === 'all'
        ? todos.current.length
        : todos.filtered.length) + " todo's left"}
      <ul class='flex h-full list-none items-center justify-center'>
        <For each={['all', 'active', 'completed'] as TodoFilter[]}>
          {(filter: TodoFilter) => (
            <li
              class={classNames(
                'my-[7px] flex h-full cursor-pointer select-none items-center justify-center px-[5px] hover:text-error',
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
        class='flex h-full cursor-pointer select-none items-center justify-center hover:text-primary-brightBlue'
        onClick={clearCompletedTodos}>
        Clear completed
      </p>
    </footer>
  )
}
