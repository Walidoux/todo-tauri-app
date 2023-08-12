import type { PluginOption } from 'vite'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import { transformSync } from '@swc/core'

const getExtension = (filename: string): string => {
  const index = filename.lastIndexOf('.')
  return index < 0 ? '' : filename.substring(index).replace(/\?.+$/, '')
}

const SolidSWC: PluginOption = {
  name: 'solid',
  transform(code, id) {
    const currentFileExtension = getExtension(id)
    const extensionsToWatch = ['.tsx', '.jsx', '.ts', '.js']

    if (!extensionsToWatch.includes(currentFileExtension)) return null

    return transformSync(code, {
      filename: id,
      jsc: {
        parser: { syntax: 'typescript', tsx: true },
        target: 'es2022',
        experimental: {
          plugins: [
            [
              new URL('plugins/JSX.wasm', import.meta.url).pathname,
              {
                module_name: 'solid-js/web'
              }
            ]
          ]
        }
      }
    })
  }
}

export default defineConfig({
  plugins: [SolidSWC, solidPlugin()]
})
