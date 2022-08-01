import { createSignal } from 'solid-js'
import { createStore, produce } from 'solid-js/store'

import type { ITodo, TodoFilter } from '../types/Todo'
import { readData } from '../utils'

export const [todos, setTodos] = createStore({
  current: (JSON.parse(await readData('./todos/list.json')) || []) as ITodo[],
  filtered: (JSON.parse(await readData('./todos/filtered.json')) ||
    []) as ITodo[]
})

export const [todosFilter, setTodosFilter] = createSignal(
  (localStorage.getItem('todosFilter') || 'all') as TodoFilter
)

/* While using a mutable store is very simple, it could be hard
to reason about when changes are made from many places in the application.
Thus I would recommend the second alternative, which is to use an Immer inspired
utility function called produce(). This utility allows us to write code that mutates
data in the normal way but automatically creates immutable copies behind the scenes. */
export const addTodo = (todo: ITodo) =>
  setTodos(
    'current',
    produce((currentTodos: ITodo[]) => currentTodos.push(todo))
  )

export const toggleTodo = (todo: ITodo) => {
  setTodos(
    'current',
    (currentTodo) => currentTodo.id === todo.id,
    produce((todo) => (todo.completed = !todo.completed))
  )
}

export const removeTodo = (todo: ITodo) =>
  setTodos(
    'current',
    todos.current.filter((currentTodo) => currentTodo.id !== todo.id)
  )

export const clearCompletedTodos = () =>
  setTodos(
    'current',
    todos.current.filter((currentTodo) => !currentTodo.completed)
  )

export const toggleFilter = (filter: TodoFilter) => {
  setTodosFilter(filter)
  return localStorage.setItem('todosFilter', todosFilter())
}
