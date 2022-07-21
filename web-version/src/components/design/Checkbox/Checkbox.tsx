import classNames from 'classnames'
import { FiCheck } from 'solid-icons/fi'
import { createSignal, Show } from 'solid-js'
import { Motion, Presence } from '@motionone/solid'
import type { Component } from 'solid-js'
import type { SetStoreFunction } from 'solid-js/store/types/store'

import { ITodo, toggleTodo } from '../../../stores/todos'

import styles from './Checkbox.module.scss'

interface CheckboxProps {
  todo: ITodo
  todoHandler?: SetStoreFunction<{
    current: ITodo
  }>
}

export const Checkbox: Component<CheckboxProps> = ({ todo, todoHandler }) => {
  const [completedTodo, setCompletedTodo] = createSignal(todo.completed)

  const handleCompletedTodo = () => {
    setCompletedTodo(!completedTodo())
    return toggleTodo(todo)
  }

  const handleInputTodo = () => {
    setCompletedTodo(!completedTodo())
    return todoHandler(
      'current',
      'completed',
      (completedTodo) => !completedTodo
    )
  }

  const handleToggleTodo = () =>
    todoHandler == null ? handleCompletedTodo() : handleInputTodo()

  return (
    <div
      onclick={handleToggleTodo}
      class={classNames(styles['checkbox-container'], {
        [styles.completed]: completedTodo()
      })}>
      <input
        type='checkbox'
        checked={completedTodo()}
        class={styles.checkbox}
      />

      <Presence>
        <Show when={completedTodo()}>
          <Motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <FiCheck class={styles['check-icon']} />
          </Motion.span>
        </Show>
      </Presence>
    </div>
  )
}
