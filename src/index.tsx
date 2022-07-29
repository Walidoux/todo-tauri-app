/* @refresh reload */
import './index.css'
import '@fontsource/poppins'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'

import { render } from 'solid-js/web'

import App from './App'

render(() => <App />, document.getElementById('root') as HTMLElement)
