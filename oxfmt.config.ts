import { defineConfig } from "oxfmt"

export default defineConfig({
  semi: false,
  sortImports: { newlinesBetween: true },
  sortTailwindcss: {},
  sortPackageJson: true,
})
