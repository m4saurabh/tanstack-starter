import { defineConfig } from "oxlint"

import packageJson from "./package.json" with { type: "json" }

export default defineConfig({
  plugins: ["eslint", "oxc", "unicorn", "typescript", "react", "react-perf", "jsx-a11y"],
  options: {
    typeAware: true,
    typeCheck: true,
  },
  settings: {
    react: {
      version: packageJson.dependencies.react.slice(1),
    },
  },
})
