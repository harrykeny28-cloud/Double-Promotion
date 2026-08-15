import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Use esbuild (built-in) instead of terser
    minify: 'esbuild',
    esbuild: {
      drop: ['console', 'debugger'],
    },
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
    // Target modern browsers for smaller bundle
    target: 'esnext',
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Disable source maps in production
    sourcemap: false,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Report compressed size
    reportCompressedSize: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    esbuildOptions: {
      target: 'esnext',
    },
  },
})
