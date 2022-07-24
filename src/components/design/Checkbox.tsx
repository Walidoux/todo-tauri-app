import { ITodo, toggleTodo } from '../../stores/todos'
import { Motion, Presence } from '@motionone/solid'
import { Show, createSignal } from 'solid-js'

import type { Component } from 'solid-js'
import { FiCheck } from 'solid-icons/fi'
import type { SetStoreFunction } from 'solid-js/store/types/store'
import classNames from 'classnames'

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
      class={classNames(
        'group relative mr-5 h-[30px] w-[90%] min-w-[30px] before:pointer-events-none before:absolute before:top-1/2 before:left-1/2 before:h-[90%] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-light-hard-grayish-light-blue hover:opacity-80 active:scale-95',
        {
          'before:invisible before:opacity-0': completedTodo()
        }
      )}>
      <input
        type='checkbox'
        checked={completedTodo()}
        class={classNames(
          'h-full w-full cursor-pointer appearance-none rounded-full border border-error bg-gradient-to-r from-primary-lightBlue via-primary-lightPink to-primary-transparent bg-[length:200px_100px] bg-right group-hover:border-none group-hover:bg-left',
          { 'border-none bg-left': completedTodo() }
        )}
      />

      <Presence>
        <Show when={completedTodo()}>
          <Motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <FiCheck class='pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stroke-2 text-light-default' />
          </Motion.span>
        </Show>
      </Presence>
    </div>
  )
}
