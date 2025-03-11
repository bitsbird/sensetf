import baseLint from '@eslint/js';
import tsLint from 'typescript-eslint';
import reactLint from 'eslint-plugin-react';

export default [
  baseLint.configs.recommended,
  tsLint.configs.recommended,
  reactLint.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },
];
