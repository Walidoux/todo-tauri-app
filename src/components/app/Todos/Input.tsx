import { ITodo, addTodo, todos } from '../../../stores/todos'

import { Checkbox } from '../../design/Checkbox'
import { Component } from 'solid-js'
import { createStore } from 'solid-js/store'

export const Input: Component = () => {
  const [newTodo, setNewTodo] = createStore({
    current: {
      name: '',
      completed: false,
      id: todos.current.length,
      date: new Date()
    } as ITodo
  })

  const handleSubmitTodo = (event: KeyboardEvent) => {
    if (event.key !== 'Enter' || newTodo.current.name === '') return null
    event.preventDefault()
    addTodo({ ...newTodo.current, id: ++todos.current.length })
    return setNewTodo('current', {
      ...newTodo.current,
      name: '',
      completed: false
    })
  }

  return (
    <div class='mx-auto mb-5 max-w-[600px] translate-y-36 rounded-lg p-3'>
      <Checkbox todo={newTodo.current} todoHandler={setNewTodo} />

      <input
        type='text'
        class='relative h-full w-full cursor-text border-none bg-none text-[1.035px] text-primary-brightBlue outline-none placeholder:select-none placeholder:text-primary-brightBlue'
        placeholder='Create a todo here...'
        onKeyDown={handleSubmitTodo}
        value={newTodo.current.name}
        onInput={(event) =>
          setNewTodo('current', (todo) => ({
            ...todo,
            name: event.currentTarget.value
          }))
        }
      />
    </div>
  )
}
