import './index.css'

import { Component, onCleanup } from 'solid-js'

import { Header } from './components/app/Header'
import { Todos } from './components/app/Todos/Todos'
import { initConfig, readData } from './utils'

const App: Component = () => {
  window.addEventListener('load', initConfig)
  onCleanup(() => initConfig)

  const test = () => readData()

  return (
    <main
      onclick={test}
      class='min-h-screen min-w-full bg-light-hard-grayish-light-blue transition-colors duration-300 dark:bg-dark-hard-dark-blue'>
      <Header />
      <Todos />
    </main>
  )
}

export default App
