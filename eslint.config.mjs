import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/electron',
      'plugin:import/typescript',
    ),
  ),
  {
    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts'],
      },

      'import/resolver': {
        webpack: {},

        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },

    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],

      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
        },
      ],

      'max-len': ['error', 100],
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  },
];
