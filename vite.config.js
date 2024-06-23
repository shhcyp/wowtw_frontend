import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  // base: '/',  // 设置基础路径
  // build: {
  //   // outDir: '../src/main/resources/static', // 构建输出目录
  //   outDir: '../wowtw/src/main/resources/static', // 构建输出目录
  //   emptyOutDir: true,
  // },
  // 局域网访问配置
  // server: {
  //   host: '0.0.0.0', // 允许所有IP访问
  //   port: 3000, 
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})