import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
// eslint-disable-next-line @typescript-eslint/no-var-requires
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
})
