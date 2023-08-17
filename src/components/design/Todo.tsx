import { Motion } from '@motionone/solid'
import classNames from 'clsx'
import { createSignal, type Component } from 'solid-js'

import { Trash } from './Trash'
import { Checkbox } from '../design'
import { Animations, removeTodo, toggleTodo, type ITodo } from '../../tools'
import { setTodos, todos } from '../../stores'

export const Todo: Component<ITodo> = (props) => {
  const [todo, setTodo] = createSignal(props)

  const handleToggle = async () => {
    setTodo({ ...todo(), completed: !todo().completed })

    const newTodos = [...todos()]
    const currentTodo = newTodos.find((current) => current.id === todo().id)

    newTodos[newTodos.indexOf(currentTodo as ITodo)] = todo()
    newTodos.sort((a, b) => Number(a.completed) - Number(b.completed))
    setTodos(newTodos)
    await toggleTodo(todo())
  }

  const handleRemove = async () => {
    setTodos(todos().filter((t) => t.id !== todo().id))
    await removeTodo(todo())
  }

  return (
    <Motion.div
      {...Animations.fadeInOut({ height: [0, '60px', 0] })}
      class={classNames(
        'todo group relative flex w-full items-center justify-start overflow-hidden border-b',
        'border-b-dark-grayish-light-blue bg-light-hard-gray-light pl-5 shadow-2xl transition-colors duration-300',
        'dark:border-b-dark-hover-hard-grayish-dark-blue dark:bg-dark-hard-desaturated-dark-blue'
      )}>
      <Checkbox completed={todo().completed} initialHandler={handleToggle} />

      <p
        class={classNames(
          { 'line-through opacity-50': todo().completed },
          'todo-text relative max-w-md select-none break-words text-dark-grayish-dark-blue transition duration-300'
        )}>
        {todo().name}
      </p>

      <Trash
        onClick={handleRemove}
        class={classNames(
          'invisible absolute right-3 h-full w-12 cursor-pointer p-2 text-dark-grayish-dark-blue opacity-0',
          'transition-all duration-200 hover:text-error group-hover:visible group-hover:opacity-100'
        )}
      />
    </Motion.div>
  )
}
