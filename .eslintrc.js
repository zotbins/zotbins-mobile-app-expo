module.exports = {
  extends: [
    'react-app',
    'prettier',
    'prettier/react',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['prettier', 'jsx-a11y'],
  rules: {
    'prettier/prettier': 'warn',
  },
}
