import { createSignal } from 'solid-js'
import { createStore, produce } from 'solid-js/store'

export interface ITodo {
  name: string
  completed: boolean
  id: number
  date: Date
}

export type TodoFilter = 'all' | 'active' | 'completed'

export const [todos, setTodos] = createStore({
  current: (JSON.parse(localStorage.getItem('todos')) || []) as ITodo[],
  filtered: (JSON.parse(localStorage.getItem('filtered-todos')) ||
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

const findTodo = (currentTodos: ITodo[], todo: ITodo) =>
  currentTodos.find((currentTodo) => currentTodo.id === todo.id)

export const toggleTodo = (todo: ITodo) =>
  setTodos(
    'current',
    todos.current.indexOf(findTodo(todos.current, todo)),
    'completed',
    (currentTodo) => !currentTodo
  )

export const removeTodo = (todo: ITodo) => {
  const currentTodos = [...todos.current]
  const target = findTodo(currentTodos, todo)
  currentTodos.splice(currentTodos.indexOf(target), 1)
  return setTodos('current', currentTodos)
}

export const clearCompletedTodos = () => {
  const todosLeft: ITodo[] = []
  todos.current.forEach((todo) => {
    !todo.completed ? todosLeft.push(todo) : undefined
  })
  return setTodos('current', todosLeft)
}

export const toggleFilter = (filter: TodoFilter) => {
  setTodosFilter(filter)
  return localStorage.setItem('todosFilter', todosFilter())
}
