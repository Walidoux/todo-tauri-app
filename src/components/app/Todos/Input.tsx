import type { Component } from 'solid-js'
import { createStore } from 'solid-js/store'
import { v4 as uuidv4 } from 'uuid'

import { addTodo } from '../../../stores/todos'
import type { ITodo } from '../../../types/Todo'
import { Checkbox } from '../../design/Checkbox'

export const Input: Component = () => {
  const [newTodo, setNewTodo] = createStore({
    name: '',
    completed: false,
    id: ''
  } as ITodo)

  const handleSubmitTodo = (event: SubmitEvent) => {
    if (newTodo.name === '') return null
    event.preventDefault()
    addTodo({ ...newTodo, id: uuidv4() })
    return setNewTodo({
      ...newTodo,
      name: '',
      completed: false
    })
  }

  const handleToggleTodo = () => setNewTodo('completed', !newTodo.completed)

  const handleChangeInput = (event: InputEvent) =>
    setNewTodo('name', (event.currentTarget as HTMLInputElement).value)

  return (
    <form
      onsubmit={handleSubmitTodo}
      class='mb-5 flex h-[60px] items-center justify-start rounded-lg bg-light-hard-gray-light pl-5 shadow-xl transition duration-300 dark:bg-dark-hard-desaturated-dark-blue'>
      <Checkbox todo={newTodo} handleToggleTodo={handleToggleTodo} />

      <input
        type='text'
        class='h-full w-full cursor-text border-none bg-primary-transparent pr-5 text-[1.035rem] text-dark-hard-desaturated-dark-blue outline-none placeholder:select-none placeholder:text-light-grayish-dark-blue placeholder:transition dark:text-light-grayish-dark-blue dark:placeholder:text-light-hard-grayish-dark-blue'
        placeholder='Create a todo here...'
        value={newTodo.name}
        onInput={handleChangeInput}
      />
    </form>
  )
}
