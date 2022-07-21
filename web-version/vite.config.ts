import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

const path = require('path')

const scssConfig = {
  includePaths: [
    path.join(__dirname, './src/styles/abstracts'),
    path.join(__dirname, './src/styles/base')
  ]
}

export default defineConfig({
  plugins: [solidPlugin()],
  css: { preprocessorOptions: { scss: scssConfig } },
  build: {
    target: 'esnext',
    polyfillDynamicImport: false
  }
})
