import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['preact'],
    // preact's "browser" and "import" export conditions point at different
    // builds; mixing them yields two preact instances, so pin one flavor.
    alias: [
      { find: /^use-sync-external-store\/shim$/, replacement: path.resolve('tests/shims/use-sync-external-store.ts') },
      { find: /^mobx-react$/, replacement: path.resolve('node_modules/mobx-react/es/index.js') },
      // its CJS entry would `require` a second, CJS copy of preact
      { find: /^react-showdown$/, replacement: path.resolve('node_modules/react-showdown/dist/react-showdown.esm.js') },
      { find: /^preact$/, replacement: path.resolve('node_modules/preact/dist/preact.mjs') },
      { find: /^preact\/hooks$/, replacement: path.resolve('node_modules/preact/hooks/dist/hooks.mjs') },
      { find: /^preact\/compat$/, replacement: path.resolve('node_modules/preact/compat/dist/compat.mjs') },
      { find: /^preact\/test-utils$/, replacement: path.resolve('node_modules/preact/test-utils/dist/testUtils.mjs') },
    ],
  },
  test: {
    environment: 'jsdom',
    // keep every package on the same preact instance as the app
    server: { deps: { inline: true } },
    setupFiles: ['tests/setup.ts'],
    include: ['tests/**/*.test.{ts,tsx}'],
  },
})
