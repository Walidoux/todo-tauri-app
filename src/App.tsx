import './index.css'

import { For } from 'solid-js'

import { Header, Footer, WindowBar } from './components/layout'
import { Input, Todo, ToolBar } from './components/design'
import { todos } from './stores'

const App = () => (
  <main class='min-h-screen min-w-full bg-light-hard-grayish-light-blue transition-colors duration-300 dark:bg-dark-hard-dark-blue'>
    <WindowBar />

    <Header />

    <section class='todos-container mx-auto max-w-[600px] -translate-y-28'>
      <Input />

      <For each={todos()}>{(todo) => <Todo {...todo} />}</For>

      <ToolBar />
      <Footer />
    </section>
  </main>
)

export default App
