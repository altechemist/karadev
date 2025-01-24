import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Use Next.js core rules and TypeScript-specific rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    parser: "@typescript-eslint/parser",  // Use TypeScript parser
    plugins: ["@typescript-eslint"],       // Use TypeScript plugin
    extends: [
      "eslint:recommended",                // Base ESLint rules
      "plugin:@typescript-eslint/recommended", // TypeScript-specific rules
    ],
    rules: {
      "no-unused-vars": "off",  // Disable base rule
      "@typescript-eslint/no-unused-vars": ["error"],  // Enforce TypeScript-specific unused-vars rule
    },
  },
];
