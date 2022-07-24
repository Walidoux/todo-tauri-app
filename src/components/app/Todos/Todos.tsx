import { Component, For, createEffect } from 'solid-js'
import { ITodo, setTodos, todos, todosFilter } from '../../../stores/todos'

import { Footer } from './Footer'
import { Input } from './Input'
import { Todo } from './Todo'

export const Todos: Component = () => {
  createEffect(() =>
    localStorage.setItem('todos', JSON.stringify(todos.current))
  )

  createEffect(() => {
    switch (todosFilter()) {
      case 'active':
        const todosLeft: ITodo[] = []
        todos.current.forEach((todo) =>
          !todo.completed ? todosLeft.push(todo) : null
        )
        return setTodos('filtered', todosLeft)
      case 'completed':
        const completedTodos: ITodo[] = []
        todos.current.forEach((todo) =>
          todo.completed ? completedTodos.push(todo) : null
        )
        return setTodos('filtered', completedTodos)
    }
  })

  return (
    <div class='mx-auto max-w-[600px] -translate-y-32 p-3'>
      <Input />

      <For each={todosFilter() === 'all' ? todos.current : todos.filtered}>
        {(todo) => {
          return (
            <Todo
              className='border-b border-b-dark-grayish-dark-blue odd:rounded-t-lg last-of-type:rounded-b-lg'
              {...todo}
            />
          )
        }}
      </For>

      <Footer />
    </div>
  )
}
