import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Set the test environment to jsdom for React
    globals: true, // Enables global functions like `describe`, `it`, `expect`
    setupFiles: ['./src/setupTests.js'], // Optional: Setup file for any global config
  },
})
