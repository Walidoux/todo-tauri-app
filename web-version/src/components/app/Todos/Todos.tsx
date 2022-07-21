import { Component, createEffect, For } from 'solid-js'

import { ITodo, setTodos, todos, todosFilter } from '../../../stores/todos'
import { Footer } from './Footer/Footer'
import { Input } from './Input/Input'
import { Todo } from './Todo/Todo'
import styles from './Todos.module.scss'

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
    <div class={styles.container}>
      <Input />

      <For each={todosFilter() === 'all' ? todos.current : todos.filtered}>
        {(todo) => {
          return <Todo className={styles.todo} {...todo} />
        }}
      </For>

      <Footer />
    </div>
  )
}
