module.exports = {
  extends: ['prettier'],
  rules: {
    'padding-line-between-statements': [
      2,
      // Always require blank lines before and after class declaration, if, do/while, switch, try
      {
        blankLine: 'always',
        prev: '*',
        next: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'],
      },
      {
        blankLine: 'always',
        prev: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'],
        next: '*',
      },
      // Always require blank lines before return statements
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'no-script-url': 'off',
    'no-template-curly-in-string': 'off',
    'linebreak-style': 0,
    'prefer-template': 'error',
    indent: ['warn', 2],
    'no-console': 'warn',
    'import/prefer-default-export': 'off',
    'object-curly-spacing': ['error', 'always'],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 1 }],
    'no-underscore-dangle': 0,
    'class-methods-use-this': 0,
    'max-classes-per-file': 'warn',
    'max-len': ['warn', { code: 120 }],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        trailingComma: 'all',
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        endOfLine: 'auto',
      },
    ],
  },
  env: {
    node: true,
    es6: true,
  },
};
