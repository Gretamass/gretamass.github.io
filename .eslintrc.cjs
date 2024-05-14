/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    // Disallow the use of console (except for warn and error)
    // https://eslint.org/docs/rules/no-console
    'no-console': ['error', { allow: ['warn', 'error'] }],

    // Require the use of === and !==
    // TODO: use "smart" mode for null/undefined checking?
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['error', 'always'],

    // Enforces Prettier code formatting
    'prettier/prettier': 'error',

    // Disallow unused variables (ignore unused arguments that start with an underscore)
    // https://eslint.org/docs/rules/no-unused-vars
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    // Enforce at least one newline at the end of non-empty files
    // https://eslint.org/docs/rules/eol-last
    'eol-last': ['error', 'always'],

    // Require parentheses around arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'always'],

    // Enforce consistent linebreak style
    // https://eslint.org/docs/rules/linebreak-style
    'linebreak-style': ['error', 'unix'],

    // Enforce consistent brace style for blocks
    // https://eslint.org/docs/rules/brace-style#1tbs
    'brace-style': ['error', '1tbs'],

    // Enforce consistent brace style for all control statements
    // https://eslint.org/docs/rules/curly
    curly: ['error', 'all'],

    // Disallow the 'any' type usage
    // https://typescript-eslint.io/rules/no-explicit-any/
    '@typescript-eslint/no-explicit-any': 'error',

    // Require let or const instead of var
    // https://eslint.org/docs/rules/no-var
    'no-var': 'error',

    // Require or disallow padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let'], next: '*' },
      // Allows multiple consecutive 'const' & 'let' statements without a blank line in between.
      { blankLine: 'any', prev: ['const', 'let'], next: ['const', 'let'] },
      { blankLine: 'always', prev: 'import', next: '*' },
      // Allows multiple consecutive import statements without a blank line in between.
      { blankLine: 'any', prev: 'import', next: 'import' }
    ],

    // Disallow duplicate module imports
    // https://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': 'error',

    // Require const declarations for variables that are never reassigned after declared
    // https://eslint.org/docs/rules/prefer-const
    'prefer-const': 'error'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
};
