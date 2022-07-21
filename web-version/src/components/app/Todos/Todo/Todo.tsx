import { Motion } from '@motionone/solid'
import classNames from 'classnames'
import { Component } from 'solid-js'

import { Trash } from '../../../../icons/Trash'
import { ITodo, removeTodo } from '../../../../stores/todos'
import { Checkbox } from '../../../design/Checkbox/Checkbox'

import styles from './Todo.module.scss'

interface TodoProps extends ITodo {
  className?: string
}

export const Todo: Component<TodoProps> = ({ className, ...rest }) => (
  <Motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    class={classNames(className, styles.container)}>
    <Checkbox todo={rest} />

    <p
      class={classNames(styles.todo, {
        [styles.checked]: rest.completed
      })}>
      {rest.name}
    </p>

    <Trash
      classList={styles['trash-icon']}
      clickHandler={() => removeTodo(rest)}
    />
  </Motion.div>
)
