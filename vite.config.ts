import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'ethers/lib/utils': path.resolve(__dirname, 'node_modules/ethers/src.ts/utils.ts')
    }
  }
})
