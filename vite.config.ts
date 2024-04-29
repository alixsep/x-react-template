import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePWA } from 'vite-plugin-pwa'
import pwaConfig from './pwa.config'
import sassConfig from './sass.config'

/**
 * Configuration settings for Vite setup, including plugins for TypeScript
 * path resolution, React support, and Progressive Web App (PWA) integration.
 * Additionally, server and preview settings are defined for local development,
 * with test environment configuration for Vitest and Sass styling support.
 */
export default defineConfig({
  plugins: [tsconfigPaths(), react(), VitePWA(pwaConfig)],
  server: {
    port: 5000,
    host: true,
  },
  preview: {
    port: 5000,
    host: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/vitest.setup.ts'],
  },
  css: sassConfig,
})
