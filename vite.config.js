import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/random-quotes/', // 👈 importante para GitHub Pages
  plugins: [react()],
})
