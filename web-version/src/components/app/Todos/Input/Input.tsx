import classNames from 'classnames'
import { Component } from 'solid-js'
import { createStore } from 'solid-js/store'
import { addTodo, ITodo, todos } from '../../../../stores/todos'
import { Checkbox } from '../../../design/Checkbox/Checkbox'

import todoStyles from '../Todo/Todo.module.scss'
import inputStyles from './Input.module.scss'

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
    <div
      class={classNames(todoStyles.container, inputStyles['input-container'])}>
      <Checkbox todo={newTodo.current} todoHandler={setNewTodo} />

      <input
        type='text'
        class={inputStyles['input-field']}
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
