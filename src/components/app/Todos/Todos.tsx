import { Component, For } from 'solid-js'

import { todos, todosFilter } from '../../../stores/todos'
import { Footer } from './Footer'
import { Input } from './Input'
import { Todo } from './Todo'

export const Todos: Component = () => {
  return (
    <div class='todos-container mx-auto max-w-[600px] translate-y-5'>
      <Input />

      <For each={todosFilter() === 'all' ? todos.current : todos.filtered}>
        {(todo) => {
          return (
            <Todo
              className='todo border-b border-b-dark-grayish-light-blue shadow-2xl dark:border-b-dark-hover-hard-grayish-dark-blue'
              {...todo}
            />
          )
        }}
      </For>

      <Footer />
    </div>
  )
}
