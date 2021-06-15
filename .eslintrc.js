module.exports = {
  extends: [
    `react-app`,
    `plugin:security/recommended`,
    `plugin:sonarjs/recommended`,
    `plugin:import/errors`,
    `plugin:import/warnings`,
    `plugin:import/typescript`,
  ],
  globals: {
    __PATH_PREFIX__: true,
  },
  overrides: [
    {
      files: [`*.json`],
      settings: {
        "disable/plugins": [`no-secrets`],
      },
    },
  ],
  parser: `@typescript-eslint/parser`,
  plugins: [
    `@typescript-eslint`,
    `json-format`,
    `security`,
    `disable`,
    `no-secrets`,
    `sonarjs`,
    `sort-keys-fix`,
    `import`,
  ],
  processor: `disable/disable`,
  root: true,
  rules: {
    "@typescript-eslint/no-redeclare": [`error`],
    "@typescript-eslint/no-use-before-define": [`error`],
    "comma-dangle": [
      `warn`,
      `always-multiline`,
    ],
    "jsx-a11y/accessible-emoji": `off`,
    "no-redeclare": `off`,
    "no-secrets/no-secrets": `error`,
    "no-use-before-define": `off`,
    "prefer-const": `warn`,
    quotes: [
      `error`,
      `backtick`,
    ],
    "security/detect-non-literal-require": `off`,
    "security/detect-object-injection": `off`,
    semi: [
      `warn`,
      `never`,
    ],
    "sort-keys-fix/sort-keys-fix": `warn`,
  },
}