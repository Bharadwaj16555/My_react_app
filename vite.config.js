import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/My_react_app/',  // Replace with your actual repo name
  plugins: [react()],
})

