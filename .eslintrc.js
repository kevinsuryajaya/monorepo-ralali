module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'flowtype'],
  rules: {
    'no-unused-vars': 1,
    'prettier/prettier': 1,
    'no-console': 1,
    'flowtype/boolean-style': 1,
    'flowtype/define-flow-type': 1,
    'flowtype/delimiter-dangle': 0,
    'flowtype/generic-spacing': 1,
    'flowtype/no-mixed': 0,
    'flowtype/no-types-missing-file-annotation': 1,
    'flowtype/no-weak-types': 0,
    'flowtype/require-parameter-type': 0,
    'flowtype/require-return-type': 0,
    'flowtype/require-valid-file-annotation': 0,
    'flowtype/semi': 0,
    'flowtype/space-after-type-colon': 0,
    'flowtype/space-before-generic-bracket': 1,
    'flowtype/space-before-type-colon': 1,
    'flowtype/type-id-match': 0,
    'flowtype/union-intersection-spacing': 1,
    'flowtype/use-flow-type': 1,
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
}
