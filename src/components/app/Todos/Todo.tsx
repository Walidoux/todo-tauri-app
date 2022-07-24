import { ITodo, removeTodo } from '../../../../web-version/src/stores/todos'

import { Checkbox } from '../../design/Checkbox'
import { Component } from 'solid-js'
import { Motion } from '@motionone/solid'
import { Trash } from '../../../../web-version/src/icons/Trash'
import classNames from 'classnames'

interface TodoProps extends ITodo {
  className?: string
}

export const Todo: Component<TodoProps> = ({ className, ...rest }) => (
  <Motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    class={classNames(
      className,
      'group relative flex h-[60px] items-center justify-start bg-primary-brightBlue pl-5'
    )}>
    <Checkbox todo={rest} />

    <p
      class={classNames(
        'select-none text-dark-grayish-dark-blue after:absolute after:left-0 after:top-1/2 after:h-[1px] after:-translate-y-1/2 after:bg-primary-brightBlue',
        {
          'opacity-75 after:w-full': rest.completed
        }
      )}>
      {rest.name}
    </p>

    <Trash
      className='invisible absolute right-3 h-full w-12 cursor-pointer p-2 opacity-0 hover:text-error group-hover:visible group-hover:opacity-100'
      clickHandler={() => removeTodo(rest)}
    />
  </Motion.div>
)
