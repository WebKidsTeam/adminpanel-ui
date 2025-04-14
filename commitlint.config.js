// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-pattern': [
      2,
      'always',
      /^(\w+)\((WK-\d+)\):\s.+$/,
    ],
    'header-max-length': [2, 'always', 100],
  },
};
