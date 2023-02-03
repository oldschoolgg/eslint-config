/**
 * Default ESLint configuration for oldschoolgg Projects
 * @example
 * ```json
 * {
 *   'extends': '@oldschoolgg'
 * }
 * ```
 */
/* eslint-disable @typescript-eslint/naming-convention */
const config = {
  parser: '@typescript-eslint/parser',
  plugins: ['simple-import-sort', 'import', '@typescript-eslint', 'unicorn'],
  extends: ['prettier', 'plugin:prettier/recommended'],
  env: {
    es6: true,
    es2017: true,
    es2020: true,
    node: true,
    jest: true
  },
  rules: {
    'unicorn/numeric-separators-style': [
      'error',
      {
        onlyIfContainsSeparator: false,
        hexadecimal: {
          minimumDigits: 0,
          groupLength: 2
        },
        binary: {
          minimumDigits: 0,
          groupLength: 4
        },
        octal: {
          minimumDigits: 0,
          groupLength: 4
        },
        number: {
          minimumDigits: 5,
          groupLength: 3
        }
      }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none',
        printWidth: 120,
        arrowParens: 'avoid'
      }
    ],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': true,
        'ts-check': true,
        minimumDescriptionLength: 3
      }
    ],
    '@typescript-eslint/class-literal-property-style': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/dot-notation': [
      'error',
      {
        allowKeywords: true,
        allowPattern: '(^[A-Z])|(^[a-z]+(_[a-z]+)+$)',
        allowPrivateClassPropertyAccess: true
      }
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/init-declarations': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
        filter: {
          regex: '^(?:VariableDeclarator|AssignmentExpression)$',
          match: false
        }
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'property',
        modifiers: ['readonly'],
        prefix: ['k'],
        format: ['PascalCase']
      },
      {
        selector: 'enumMember',
        format: ['PascalCase']
      },
      {
        selector: 'typeLike',
        format: ['PascalCase']
      }
    ],
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        typedefs: false,
        functions: false
      }
    ],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    'accessor-pairs': 'off',
    'block-scoped-var': 'error',
    'callback-return': 'off',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'off',
    complexity: 'off',
    'consistent-return': 'off',
    'consistent-this': ['error', 'self'],
    'constructor-super': 'off',
    'default-case': 'off',
    'dot-notation': 'off',
    eqeqeq: ['error', 'smart'],
    'for-direction': 'off',
    'func-name-matching': ['warn', 'always'],
    'func-names': ['warn', 'as-needed'],
    'func-style': 'off',
    'getter-return': 'off',
    'global-require': 'off',
    'guard-for-in': 'warn',
    'handle-callback-err': 'off',
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'init-declarations': 'off',
    'line-comment-position': 'off',
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true
      }
    ],
    'max-depth': 'off',
    'max-lines': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': [
      'error',
      {
        max: 1
      }
    ],
    'multiline-comment-style': 'off',
    'new-cap': 'off',
    'no-alert': 'error',
    'no-array-constructor': 'off',
    'no-await-in-loop': 'off',
    'no-bitwise': 'off',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-catch-shadow': 'error',
    'no-class-assign': 'warn',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'warn',
    'no-console': 'off',
    'no-const-assign': 'off',
    'no-constant-condition': 'off',
    'no-control-regex': 'off',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-div-regex': 'off',
    'no-dupe-args': 'off',
    'no-dupe-class-members': 'off',
    'no-dupe-keys': 'off',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': [
      'error',
      {
        includeExports: false
      }
    ],
    'no-else-return': 'warn',
    'no-empty': 'off',
    'no-empty-character-class': 'error',
    'no-empty-function': 'off',
    'no-empty-pattern': 'off',
    'no-eq-null': 'warn',
    'no-eval': 'warn',
    'no-ex-assign': 'off',
    'no-extend-native': 'warn',
    'no-extra-bind': 'off',
    'no-extra-boolean-cast': 'off',
    'no-extra-label': 'warn',
    'no-fallthrough': 'off',
    'no-func-assign': 'off',
    'no-global-assign': 'off',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'off',
    'no-import-assign': 'off',
    'no-inline-comments': 'off',
    'no-inner-declarations': 'off',
    'no-invalid-regexp': 'warn',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true
      }
    ],
    'no-iterator': 'off',
    'no-label-var': 'error',
    'no-labels': 'off',
    'no-lone-blocks': 'off',
    'no-lonely-if': 'error',
    'no-loop-func': 'off',
    'no-magic-numbers': 'off',
    'no-mixed-requires': 'error',
    'no-multi-assign': 'warn',
    'no-multi-str': 'error',
    'no-nested-ternary': 'off',
    'no-new': 'off',
    'no-new-func': 'warn',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'off',
    'no-new-wrappers': 'warn',
    'no-obj-calls': 'off',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-path-concat': 'warn',
    'no-plusplus': 'off',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-proto': 'off',
    'no-prototype-builtins': 'off',
    'no-redeclare': 'off',
    'no-regex-spaces': 'warn',
    'no-restricted-globals': 'off',
    'no-restricted-imports': 'off',
    'no-restricted-modules': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'off',
    'no-return-await': 'warn',
    'no-script-url': 'off',
    'no-self-assign': 'error',
    'no-self-compare': 'warn',
    'no-sequences': 'error',
    'no-setter-return': 'off',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'warn',
    'no-sync': 'off',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off',
    'no-this-before-super': 'off',
    'no-throw-literal': 'off',
    'no-undef': 'off',
    'no-undef-init': 'off',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unmodified-loop-condition': 'off',
    'no-unneeded-ternary': 'off',
    'no-unreachable': 'off',
    'no-unsafe-finally': 'warn',
    'no-unsafe-negation': 'off',
    'no-unused-expressions': 'off',
    'no-unused-labels': 'error',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-call': 'off',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'off',
    'no-useless-escape': 'off',
    'no-useless-rename': 'error',
    'no-useless-return': 'warn',
    'no-var': 'error',
    'no-void': 'off',
    'no-warning-comments': 'off',
    'no-with': 'error',
    'object-shorthand': ['error', 'always'],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'prefer-const': 'off',
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: false
        }
      }
    ],
    'prefer-numeric-literals': 'off',
    'prefer-promise-reject-errors': 'error',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    'prefer-template': 'warn',
    'require-await': 'off',
    'require-jsdoc': 'off',
    'require-yield': 'warn',
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'spaced-comment': ['error', 'always'],
    strict: ['error', 'never'],
    'symbol-description': 'warn',
    'use-isnan': 'error',
    'valid-jsdoc': 'off',
    'valid-typeof': 'off',
    'vars-on-top': 'off',
    yoda: 'error',
    'array-callback-return': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/require-await': 'off',
    radix: 'off',
    'no-negated-condition': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'import', next: 'const' },
      { blankLine: 'always', prev: 'import', next: 'export' },
      { blankLine: 'always', prev: 'const', next: 'export' }
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: true,
        allowNullableBoolean: true,
        allowNullableString: true,
        allowNullableNumber: true,
        allowAny: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false
      }
    ]
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    project: './tsconfig.eslint.json'
  }
};

module.exports = config;
