/// <reference types="vitest" />
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  test: {
    exclude: ['**/node_modules/**', '**/dist/**', '**/public/**'],
    environment: "jsdom",
    globals: true,
    setupFiles: ["./__tests/setup.ts"],
  },
  publicDir: 'public',
  server: {
    watch: {
        ignored: ['**/node_modules/**', '**/dist/**', '**/public/**'],
    },
  },
})
