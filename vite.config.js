import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/stac-website/',   // ✅ must match repo name exactly
  plugins: [react()],
})