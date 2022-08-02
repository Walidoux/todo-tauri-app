import { Component, For } from 'solid-js'

import { filteredTodos, todosFilter } from '../../../stores/todos'
import { Editings } from './Editings'
import { Input } from './Input'
import { Todo } from './Todo'

export const Todos: Component = () => (
  <div class='todos-container mx-auto max-w-[600px] -translate-y-28 shadow-lg'>
    <Input />

    <For each={filteredTodos(todosFilter())}>
      {(todo) => {
        return (
          <Todo
            className='todo border-b border-b-dark-grayish-light-blue shadow-2xl dark:border-b-dark-hover-hard-grayish-dark-blue'
            {...todo}
          />
        )
      }}
    </For>

    <Editings />
  </div>
)
