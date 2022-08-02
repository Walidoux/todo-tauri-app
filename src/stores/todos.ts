import { createSignal } from 'solid-js'
import { createStore, produce } from 'solid-js/store'

import type { ITodo, TodoFilter } from '../types/Todo'
import { initConfig, readData } from '../utils'

await initConfig()

export const [todos, setTodos] = createStore(
  (JSON.parse(await readData('./todos/list.json')) || []) as ITodo[]
)

export const [todosFilter, setTodosFilter] = createSignal(
  (localStorage.getItem('todosFilter') || 'all') as TodoFilter
)

export const filteredTodos = (filter: TodoFilter) => {
  switch (filter) {
    case 'active':
      return todos.filter((currentTodo) => !currentTodo.completed)
    case 'completed':
      return todos.filter((currentTodo) => currentTodo.completed)
    default:
      return todos
  }
}

/* While using a mutable store is very simple, it could be hard
to reason about when changes are made from many places in the application.
Thus I would recommend the second alternative, which is to use an Immer inspired
utility function called produce(). This utility allows us to write code that mutates
data in the normal way but automatically creates immutable copies behind the scenes. */
export const addTodo = (todo: ITodo) =>
  setTodos(produce((currentTodos: ITodo[]) => currentTodos.push(todo)))

export const toggleTodo = (todo: ITodo) =>
  setTodos(
    (currentTodo) => currentTodo.id === todo.id,
    produce((todo) => (todo.completed = !todo.completed))
  )

export const removeTodo = (todo: ITodo) =>
  setTodos(todos.filter((currentTodo) => currentTodo.id !== todo.id))

export const clearCompletedTodos = () =>
  setTodos(todos.filter((currentTodo) => !currentTodo.completed))

export const toggleFilter = (filter: TodoFilter) => {
  setTodosFilter(filter)
  return localStorage.setItem('todosFilter', todosFilter())
}
