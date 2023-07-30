/* eslint-disable quote-props */
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig(ctx => {
  return {
    plugins: [react()],
    base:ctx.mode === "development"? "":"react-test"
  }
})
