import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Set this to '/<github-repo-name>/' for GitHub Pages
  // Example if your repo is named "hublimoto": base: '/hublimoto/'
  base: '/hublimoto/',

})