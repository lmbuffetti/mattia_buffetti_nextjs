const js = require('@eslint/js')
const tseslint = require('typescript-eslint')
const reactPlugin = require('eslint-plugin-react')
const prettierPlugin = require('eslint-plugin-prettier')
const prettierConfig = require('eslint-config-prettier')
const unusedImports = require('eslint-plugin-unused-imports')
const simpleImportSort = require('eslint-plugin-simple-import-sort')
const formatjsPlugin = require('eslint-plugin-formatjs').default

const prettierOptions = {
  bracketSpacing: true,
  jsxBracketSameLine: false,
  singleAttributePerLine: true,
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  arrowParens: 'avoid',
}

module.exports = tseslint.config(
  // Base JS recommended
  js.configs.recommended,

  // TypeScript recommended
  ...tseslint.configs.recommended,

  // React recommended (flat config)
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],

  // Prettier (disables conflicting rules)
  prettierConfig,

  // Main config block
  {
    plugins: {
      prettier: prettierPlugin,
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
      formatjs: formatjsPlugin,
    },
    settings: {
      react: {
        version: '19.0',
      },
    },
    rules: {
      // Prettier
      'prettier/prettier': ['error', prettierOptions],

      // TypeScript
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-require-imports': 'off',

      // General
      curly: ['error', 'all'],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      semi: [2, 'never'],

      // Unused imports
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // React
      'react/self-closing-comp': [
        'error',
        { component: true, html: true },
      ],

      // Import sort
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // FormatJS (i18n) — only warn so non-i18n files don't fail
      'formatjs/enforce-description': ['warn', 'literal'],
      'formatjs/enforce-default-message': ['warn', 'literal'],
      'formatjs/enforce-id': [
        'warn',
        { idInterpolationPattern: '[sha512:contenthash:base64:6]' },
      ],
      'formatjs/enforce-placeholders': 'warn',
      'formatjs/no-multiple-whitespaces': 'error',
      'formatjs/no-offset': 'error',
    },
  },

  // Relax some rules for plain JS files
  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-require-imports': 'off',
    },
  },

  // Ignore build output and config files
  {
    ignores: ['node_modules/**', '.next/**', 'public/vendor/**'],
  },
)
