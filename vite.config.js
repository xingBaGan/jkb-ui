import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
var path = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      packages: path.resolve(__dirname, '../packages'),
    },
  }
})
