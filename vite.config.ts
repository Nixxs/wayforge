import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  ssr: {
    // The SSR build only runs at build time to prerender; bundle deps so Node never
    // has to resolve MUI/Emotion ESM or CSS imports itself
    noExternal: true,
  },
})
