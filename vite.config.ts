import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy: {
      '/smartwallet': {
        // target: 'https://smart-wallet-us83.onrender.com',
        target: 'http://localhost:8003/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/smartwallet/, ''),
      },
      '/blogApi': {
        // target: 'https://blog-app-dxj7.onrender.com/',
        target: 'http://localhost:8000/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/blogApi/, ''),
      },
      '/rolesAPi': {
        target: 'http://localhost:8000/v1',
        // target: 'http://localhost:8000/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/blogApi/, ''),
      },
    }
  }
})
