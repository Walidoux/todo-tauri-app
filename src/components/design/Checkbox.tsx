import { Motion, Presence } from '@motionone/solid'
import classNames from 'classnames'
import { FiCheck } from 'solid-icons/fi'
import type { Component } from 'solid-js'
import { createSignal, Show } from 'solid-js'
import type { SetStoreFunction } from 'solid-js/store/types/store'

import { toggleTodo } from '../../stores/todos'
import { ITodo } from '../../types/Todo'

interface CheckboxProps {
  todo: ITodo
  todoHandler?: SetStoreFunction<ITodo>
}

export const Checkbox: Component<CheckboxProps> = ({ todo, todoHandler }) => {
  const [completedTodo, setCompletedTodo] = createSignal(todo.completed)

  const handleCompletedTodo = () => {
    setCompletedTodo(!completedTodo())
    return toggleTodo(todo)
  }

  const handleInputTodo = () => {
    setCompletedTodo(!completedTodo())
    return todoHandler('completed', (completedTodo) => !completedTodo)
  }

  const handleToggleTodo = () =>
    todoHandler == null ? handleCompletedTodo() : handleInputTodo()

  return (
    <div
      onclick={handleToggleTodo}
      class='group relative mr-5 h-[30px] min-w-[30px] transition hover:opacity-80 active:scale-95'>
      <input
        type='checkbox'
        checked={completedTodo()}
        class={classNames(
          'h-full w-full cursor-pointer appearance-none rounded-full border border-dark-hard-grayish-dark-blue bg-checkbox-gradient bg-[length:400%] bg-right transition-all duration-300 group-hover:opacity-80',
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
