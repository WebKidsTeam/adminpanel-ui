module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-enum': [
        2,
        'always',
        ['feat', 'fix', 'chore', 'docs', 'refactor', 'test'],
      ],
      'type-empty': [2, 'never'],
      'scope-empty': [1, 'never'],
      'subject-empty': [2, 'never'],
      'header-max-length': [2, 'always', 100],
    },
  };
  