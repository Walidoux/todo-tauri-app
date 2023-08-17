import { v4 as uuid } from 'uuid'
import { createSignal } from 'solid-js'

import { Checkbox } from '.'
import { addTodo, type ITodo } from '../../tools'
import { setTodos, todos } from '../../stores'

export const Input = () => {
  const [todo, setTodo] = createSignal<ITodo>({ name: '', completed: false, id: '' })

  const handleSubmitTodo = async (event: SubmitEvent) => {
    event.preventDefault()

    if (todo().name !== '') {
      setTodo({ ...todo(), id: uuid() })
      await addTodo(todo())
      setTodos([...todos(), todo()])
    }

    setTodo({ id: '', name: '', completed: false })
  }

  return (
    <form
      onSubmit={handleSubmitTodo}
      class='mb-5 flex h-[60px] select-none items-center justify-start rounded-lg bg-light-hard-gray-light pl-5 shadow-xl transition duration-300 dark:bg-dark-hard-desaturated-dark-blue'>
      <Checkbox
        completed={todo().completed}
        initialHandler={(): ITodo => setTodo({ ...todo(), completed: !todo().completed })}
      />

      <input
        type='text'
        value={todo().name}
        placeholder='Create a todo here...'
        class='h-full w-full cursor-text border-none bg-primary-transparent pr-5 text-[1.035rem] text-dark-hard-desaturated-dark-blue outline-none placeholder:select-none placeholder:text-light-grayish-dark-blue placeholder:transition dark:text-light-grayish-dark-blue dark:placeholder:text-light-hard-grayish-dark-blue'
        onInput={(event): ITodo => setTodo({ ...todo(), name: event.target.value })}
      />
    </form>
  )
}
