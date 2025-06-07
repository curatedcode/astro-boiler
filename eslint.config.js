import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import astroParser from "astro-eslint-parser";
import prettier from "eslint-config-prettier";
import astro from "eslint-plugin-astro";
import { defineConfig } from "eslint/config";

const commonRules = {
  "no-console": "off",
  "no-debugger": "error",
  "no-duplicate-imports": "error",
  "no-empty": "error",
  "no-unused-vars": "off",
  "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  "no-var": "error",
  "prefer-const": "error",
  "prefer-template": "error",
  "object-shorthand": "error",
  "prefer-arrow-callback": "error",
  "arrow-body-style": ["error", "as-needed"],
  "prefer-destructuring": ["error", { array: false, object: true }],
  "no-implicit-coercion": "error",
  eqeqeq: ["error", "always"],
  curly: ["error", "all"],
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
  yoda: "error",
  "@typescript-eslint/no-shadow": "error",
  "@typescript-eslint/no-use-before-define": "error",
};

const commonIgnoreFiles = [
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
];

export default defineConfig([
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    ignores: commonIgnoreFiles,
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
    },
    rules: commonRules,
  },
  {
    files: ["**/*.astro"],
    ignores: commonIgnoreFiles,
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
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
  prettier,
]);
