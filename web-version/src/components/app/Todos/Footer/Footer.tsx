import { Component, For } from 'solid-js'
import classNames from 'classnames'

import {
  clearCompletedTodos,
  TodoFilter,
  todos,
  todosFilter,
  toggleFilter
} from '../../../../stores/todos'

import styles from './Footer.module.scss'
import todoStyles from '../Todo/Todo.module.scss'

export const Footer: Component = () => {
  const capitalize = (value: string) => value[0].toUpperCase() + value.slice(1)

  return (
    <footer class={classNames(todoStyles.container, styles.footer)}>
      {(todosFilter() === 'all'
        ? todos.current.length
        : todos.filtered.length) + " todo's left"}
      <ul class={styles['filter-list']}>
        <For each={['all', 'active', 'completed'] as TodoFilter[]}>
          {(filter: TodoFilter) => (
            <li
              class={classNames(styles['filter'], {
                [styles.active]: filter === todosFilter()
              })}
              onClick={() => toggleFilter(filter)}>
              {capitalize(filter)}
            </li>
          )}
        </For>
      </ul>
      <p class={styles['clear-completed']} onClick={clearCompletedTodos}>
        Clear completed
      </p>
    </footer>
  )
}
