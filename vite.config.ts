 /// <reference types="vite/client" />
/* eslint-disable quote-props */
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
const { DEV } = import.meta.env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:DEV?"":"react-test"
})
