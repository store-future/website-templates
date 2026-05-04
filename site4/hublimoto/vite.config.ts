import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  // base: '/website-templates/site4/hublimoto/dist/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})