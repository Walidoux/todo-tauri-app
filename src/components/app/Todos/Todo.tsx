import { Motion } from '@motionone/solid'
import classNames from 'classnames'
import { Component, createEffect } from 'solid-js'

import { Trash } from '../../../icons/Trash'
import { removeTodo, todos } from '../../../stores/todos'
import type { ITodo } from '../../../types/Todo'
import { writeData } from '../../../utils'
import { Checkbox } from '../../design/Checkbox'

interface TodoProps extends ITodo {
  className?: string
}

export const Todo: Component<TodoProps> = (props) => {
  createEffect(() => writeData(JSON.stringify(todos)))

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      class={classNames(
        props.className,
        'group relative flex min-h-[60px] w-full items-center justify-start bg-light-hard-gray-light pl-5 transition-colors duration-300 dark:bg-dark-hard-desaturated-dark-blue'
      )}>
      <Checkbox todo={props} />

      <p
        class={classNames(
          'relative max-w-md select-none break-words text-dark-grayish-dark-blue transition duration-300',
          {
            'line-through opacity-50': props.completed
          }
        )}>
        {props.name}
      </p>

      <Trash
        class='invisible absolute right-3 h-full w-12 cursor-pointer p-2 text-dark-grayish-dark-blue opacity-0 transition-all duration-200 hover:text-error group-hover:visible group-hover:opacity-100'
        onclick={() => removeTodo(props)}
      />
    </Motion.div>
  )
}
