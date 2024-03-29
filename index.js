module.exports = {
  rules: {
    'array-type': [true, 'array-simple'],
    'arrow-return-shorthand': true,
    ban: [
      true,
      { name: ['it', 'skip'] },
      { name: ['it', 'only'] },
      { name: ['it', 'async', 'skip'] },
      { name: ['it', 'async', 'only'] },
      { name: ['describe', 'skip'] },
      { name: ['describe', 'only'] },
      { name: 'parseInt', message: 'tsstyle#type-coercion' },
      { name: 'parseFloat', message: 'tsstyle#type-coercion' },
      { name: 'Array', message: 'tsstyle#array-constructor' },
      {
        name: ['*', 'innerText'],
        message: 'Use .textContent instead. tsstyle#browser-oddities',
      },
    ],
    'ban-ts-ignore': true,
    'ban-types': [
      true,
      ['Object', 'Use {} instead.'],
      ['String', "Use 'string' instead."],
      ['Number', "Use 'number' instead."],
      ['Boolean', "Use 'boolean' instead."],
    ],
    'class-name': true,
    curly: [true, 'ignore-same-line'],
    deprecation: true,
    forin: true,
    'interface-over-type-literal': true,
    'jsdoc-format': true,
    'label-position': true,
    'member-access': [true, 'no-public'],
    'new-parens': true,
    'no-angle-bracket-type-assertion': true,
    'no-any': true,
    'no-arg': true,
    'no-conditional-assignment': true,
    'no-construct': true,
    'no-debugger': true,
    'no-default-export': true,
    'no-duplicate-variable': true,
    'no-inferrable-types': true,
    'no-namespace': [true, 'allow-declarations'],
    'no-reference': true,
    'no-string-throw': true,
    'no-return-await': true,
    'no-unsafe-finally': true,
    'no-var-keyword': true,
    'object-literal-shorthand': true,
    'only-arrow-functions': [
      true,
      'allow-declarations',
      'allow-named-functions',
    ],
    'prefer-const': true,
    radix: true,
    semicolon: [true, 'always', 'ignore-bound-class-methods'],
    'switch-default': true,
    'trailing-comma': [
      true,
      {
        multiline: {
          objects: 'always',
          arrays: 'always',
          functions: 'never',
          typeLiterals: 'ignore',
        },
        esSpecCompliant: true,
      },
    ],
    'triple-equals': [true, 'allow-null-check'],
    'use-isnan': true,
    'variable-name': [
      true,
      'check-format',
      'ban-keywords',
      'allow-leading-underscore',
      'allow-trailing-underscore',
    ],
    'no-require-imports': true,
    'prefer-template': true,
    'import-blacklist': [true, 'rxjs/Rx'],
    'max-classes-per-file': false,
    'max-line-length': [true, 140],
    'member-ordering': [
      true,
      {
        order: [
          'static-field',
          'static-method',
          'instance-field',
          'private-instance-field',
          'public-constructor',
          'instance-method',
          'private-instance-method',
        ],
        alphabetize: false,
      },
    ],
    'no-consecutive-blank-lines': true,
    'no-console': [true, 'debug', 'info', 'time', 'timeEnd', 'trace'],
    'no-empty': false,
    'no-non-null-assertion': true,
    'no-redundant-jsdoc': true,
    'no-switch-case-fall-through': true,
    'no-use-before-declare': false,
    'no-var-requires': false,
    'object-literal-key-quotes': [true, 'as-needed'],
    'object-literal-sort-keys': false,
    'ordered-imports': false,
    quotemark: [true, 'single'],
    'no-unnecessary-class': [
      true,
      'allow-constructor-only',
      'allow-static-only',
      'allow-empty-class',
    ],
    'prefer-readonly': true,
    'adjacent-overload-signatures': true,
    'unified-signatures': true,
    'prefer-function-over-method': [true, 'allow-protected'],
    'no-unbound-method': [true, 'ignore-static'],
    'no-invalid-this': [true, 'check-function-in-method'],
    'static-this': true,
    'no-this-assignment': true,
    'unnecessary-constructor': true,
    'no-duplicate-super': true,
    'no-misused-new': true,
    'no-empty-interface': true,
    'prefer-method-signature': true,
    'function-constructor': true,
    'no-parameter-reassignment': true,
    'no-void-expression': true,
    'return-undefined': true,
    'no-unnecessary-callback-wrapper': true,
    'unnecessary-bind': true,
    'promise-function-async': true,
    'await-promise': true,
    'no-floating-promises': true,
    'no-shadowed-variable': [
      true,
      {
        temporalDeadZone: false,
      },
    ],
    'one-variable-per-declaration': [true, 'ignore-for-loop'],
    'no-unnecessary-initializer': true,
    'no-implicit-dependencies': [true, 'dev'],
    'no-import-side-effect': [
      true,
      {
        'ignore-module': '(hammerjs|core-js|zone.js)',
      },
    ],
    'no-duplicate-imports': true,
    'no-default-import': true,
    typedef: [true, 'call-signature', 'property-declaration'],
    'use-default-type-parameter': true,
    'no-object-literal-type-assertion': true,
    'no-unnecessary-type-assertion': true,
    'callable-types': true,
    'no-null-keyword': true,
    'prefer-object-spread': true,
    'no-string-literal': true,
    'no-invalid-template-strings': true,
    'increment-decrement': [true, 'allow-post'],
    'restrict-plus-operands': true,
    'binary-expression-operand-order': true,
    'no-dynamic-delete': true,
    'no-bitwise': true,
    'prefer-conditional-expression': [true, 'check-else-if'],
    'no-tautology-expression': true,
    'no-boolean-literal-compare': true,
    'unnecessary-else': true,
    'prefer-while': true,
    'prefer-for-of': true,
    'no-for-in-array': true,
    'no-duplicate-switch-case': true,
    'cyclomatic-complexity': [true, 20],
    'max-file-line-count': [true, 250],
    eofline: true,
    'space-before-function-paren': [
      true,
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
        method: 'never',
        constructor: 'never',
      },
    ],
    'space-within-parens': false,
    'import-spacing': true,
    'no-trailing-whitespace': true,
    'newline-before-return': true,
    'newline-per-chained-call': true,
    'one-line': [
      true,
      'check-open-brace',
      'check-whitespace',
      'check-else',
      'check-catch',
      'check-finally',
    ],
    align: [true, 'elements', 'members', 'parameters', 'statements'],
    'file-name-casing': [true, 'kebab-case'],
    'comment-format': [true, 'check-space'],
    'no-eval': true,
    'no-internal-module': true,
    'number-literal-format': true,
    'no-unused-expression': [true, 'allow-fast-null-checks'],
    'no-sparse-arrays': true,
    'ban-comma-operator': true,
  },
};
