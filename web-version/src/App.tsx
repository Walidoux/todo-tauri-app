import { Component } from 'solid-js'
import { Header } from './components/app/Header/Header'
import { Todos } from './components/app/Todos/Todos'

import './styles/main.scss'

const App: Component = () => {
  return (
    <main class='application'>
      <Header />
      <Todos />
    </main>
  )
}

export default App
