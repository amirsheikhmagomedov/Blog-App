module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'prettier/prettier': 0,
    '@typescript-eslint/dot-notation': 'off',
    'react/require-default-props': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'jsx-a11y/img-redundant-alt': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/no-array-index-key': 'off',
    'no-underscore-dangle': 'off',
    'func-names': 'off',
    'react/jsx-no-useless-fragment': 'off',
  },
};
