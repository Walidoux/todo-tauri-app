import './index.css'

import { Component } from 'solid-js'

import { Header } from './components/app/Header'
import { Todos } from './components/app/Todos/Todos'
import { Footer } from './components/layout/Footer'
import { WindowBar } from './components/layout/WindowBar'

const App: Component = () => (
  <>
    <WindowBar />

    <main class='min-h-screen min-w-full bg-light-hard-grayish-light-blue transition-colors duration-300 dark:bg-dark-hard-dark-blue'>
      <Header />
      <Todos />
      <Footer />
    </main>
  </>
)

export default App
