import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export const aliases = {
  '@': resolve(__dirname, './src'),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  publicDir: './public',
  resolve: {
    alias: aliases,
  },
})
