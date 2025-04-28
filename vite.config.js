import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/nome-do-seu-repositorio/', // Isso deve ser igual ao nome do repositório que você vai criar
})