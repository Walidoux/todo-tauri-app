import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import { tauri } from 'vite-plugin-tauri'

export default defineConfig({
  plugins: [solidPlugin(), tauri()],

  // prevent vite from obscuring rust errors
  clearScreen: false,

  server: { port: 3000, strictPort: true, open: false },

  // env variables: to make use of `TAURI_PLATFORM`, `TAURI_ARCH`, `TAURI_FAMILY`,
  // `TAURI_PLATFORM_VERSION`, `TAURI_PLATFORM_TYPE` and `TAURI_DEBUG`
  envPrefix: ['VITE_', 'TAURI_'],

  build: {
    target: 'esnext',
    minify: !Boolean(process.env['TAURI_DEBUG']) ? 'esbuild' : false,
    sourcemap: Boolean(process.env['TAURI_DEBUG'])
  }
})
