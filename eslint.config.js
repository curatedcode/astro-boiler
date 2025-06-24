import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import astroParser from "astro-eslint-parser";
import { defineConfig } from "eslint/config";
import prettier from "eslint-config-prettier";
import astro from "eslint-plugin-astro";
import globals from "globals";

const commonRules = {
  "no-console": "off",
  "no-debugger": "error",
  "no-duplicate-imports": "error",
  "no-empty": "error",
  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": [
    "error",
    { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
  ],
  "no-var": "error",
  "prefer-const": "error",
  "prefer-template": "error",
  "object-shorthand": "error",
  "prefer-arrow-callback": "error",
  "arrow-body-style": ["error", "as-needed"],
  "prefer-destructuring": ["error", { array: false, object: true }],
  "no-implicit-coercion": "error",
  "eqeqeq": ["error", "always"],
  "curly": ["error", "all"],
  "dot-notation": "error",
  "no-else-return": "error",
  "no-empty-function": "error",
  "no-eval": "error",
  "no-multi-spaces": "error",
  "no-param-reassign": "error",
  "no-return-await": "error",
  "no-unused-expressions": "error",
  "no-useless-return": "error",
  "prefer-promise-reject-errors": "error",
  "yoda": "error",
  "@typescript-eslint/no-shadow": "error",
};

export default defineConfig([
  {
    ignores: [
      "node_modules/",
      "pnpm-lock.yaml",
      "package-lock.json",
      "yarn.lock",
      "dist/",
      "build/",
      ".output/",
      ".vercel/",
      ".netlify/",
      ".astro/",
      ".env",
      ".env.local",
      ".env.development.local",
      ".env.test.local",
      ".env.production.local",
      ".vscode/",
      ".idea/",
      "*.swp",
      "*.swo",
      ".DS_Store",
      "Thumbs.db",
      "*.log",
      "logs/",
      ".cache/",
      ".parcel-cache/",
      ".next/",
      ".nuxt/",
      "coverage/",
      "*.lcov",
      "*.tmp",
      "*.temp",
    ],
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        project: "./tsconfig.json",
      },
      globals: globals.node,
    },
    plugins: {
      "@typescript-eslint": typescript,
    },
    rules: commonRules,
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      globals: {
        astroHTML: "readonly",
      },
    },
    plugins: {
      astro,
      "@typescript-eslint": typescript,
    },
    rules: {
      ...astro.configs.recommended.rules,
      ...commonRules,
    },
  },
  {
    files: ["**/*.config.{js,ts}", "playwright.config.{js,ts}"],
    languageOptions: {
      globals: globals.node,
    },
    rules: commonRules,
  },
  {
    files: ["public/serviceWorker.js"],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        workbox: "readonly",
      },
    },
    rules: commonRules,
  },
  prettier,
]);
