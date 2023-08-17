import { createEffect, createSignal } from 'solid-js'

import type { ITodo } from '../tools'
import { fetchTodos } from '../tools'

export type Filter = 'All' | 'Active' | 'Completed'

export const [filter, setFilter] = createSignal<Filter>('All')
export const [todos, setTodos] = createSignal<ITodo[]>([])

export const getTodos = async () => {
  let current!: ITodo[]

  await fetchTodos()
    .then((result) => result != null && (current = result))
    .catch(console.error)

  return current
}

export const handleFilter = async (currentFilter: Filter) => {
  if (currentFilter === filter()) return

  const currentTodos = await getTodos()
  setFilter(currentFilter)

  switch (currentFilter) {
    case 'All':
      return setTodos(currentTodos.sort((a, b) => Number(a.completed) - Number(b.completed)))
    case 'Active':
      return setTodos(currentTodos.filter((todo) => !todo.completed))
    case 'Completed':
      return setTodos(currentTodos.filter((todo) => todo.completed))
  }
}

// eslint-disable-next-line solid/reactivity
createEffect(async () => {
  await fetchTodos()
    .then((result) => result != null && setTodos(result.sort((a, b) => Number(a.completed) - Number(b.completed))))
    .catch(console.error)
})
