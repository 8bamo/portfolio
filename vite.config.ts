import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  build: {
    // Target modern browsers for smaller, faster output
    target: 'es2020',

    // CSS code splitting
    cssCodeSplit: true,

    // Smaller chunk warning limit
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        // Manual chunk splitting for optimal caching
        manualChunks: {
          vue: ['vue'],
        },
        // Cache-busting asset names
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },

    // Enable minification
    minify: 'esbuild',
  },

  // CSS optimizations
  css: {
    devSourcemap: false,
  },
})
