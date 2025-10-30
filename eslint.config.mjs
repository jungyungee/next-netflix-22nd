import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettierConfig from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      prettier: pluginPrettier,
    },
    rules: {
      // disable stylistic rules that conflict with Prettier
      ...prettierConfig.rules,
      // keep import sorting automated
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
      // surface prettier issues as ESLint warnings
      'prettier/prettier': 'warn',
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
