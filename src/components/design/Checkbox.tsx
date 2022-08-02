import { Motion, Presence } from '@motionone/solid'
import classNames from 'classnames'
import { FiCheck } from 'solid-icons/fi'
import { Component, Show } from 'solid-js'

import { toggleTodo } from '../../stores/todos'
import type { ITodo } from '../../types/Todo'

interface CheckboxProps {
  todo: ITodo
  handleToggleTodo?: () => void
}

export const Checkbox: Component<CheckboxProps> = (props) => (
  <div
    onclick={props.handleToggleTodo ?? (() => toggleTodo(props.todo))}
    class='group relative mr-5 h-[30px] min-w-[30px] transition hover:opacity-80 active:scale-95'>
    <input
      type='checkbox'
      checked={props.todo.completed}
      class={classNames(
        'h-full w-full cursor-pointer appearance-none rounded-full border border-dark-hard-grayish-dark-blue bg-checkbox-gradient bg-[length:400%] bg-right outline-none transition-all duration-300 group-hover:opacity-80',
        {
          'border-none bg-left': props.todo.completed
        }
      )}
    />

    <Presence>
      <Show when={props.todo.completed}>
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
