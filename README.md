# Getting Started with dependencies

-   yarn create react-app . --template typescript
-   yarn add -D eslint-config-airbnb
-   yarn add -D prettier-eslint-cli
-   yarn add -D eslint
-   yarn add redux
-   yarn add redux-logger
-   yarn add -D @types/redux-logger
-   yarn add redux-saga
-   yarn add -D @redux-saga/core
-   yarn add react-redux
-   yarn add -D @types/react-redux
-   yarn add redux-devtools-extension
-   yarn add -D eslint-plugin-import

## Available Scripts

-   "lint": "yarn typescript && yarn lint:ts",
-   "lint:ts": "eslint './src/\*_/_.{ts,tsx}'",
-   "prettier:ts": "prettier-eslint --list-different
    $PWD/'src/**/*.{ts,tsx}'; prettier-eslint --write $PWD/'src/\*_/_.{ts,tsx}'",
-   "typescript": "tsc"

### `yarn`

Запускает установку всех необходимых зависимостей

### `yarn start`

Запускает приложение в development режиме

### `yarn lint:ts`

Запускает проверку Typescript с помощью ESLint

### `yarn prettier:ts`

Запускает автоматическое исправление TypeScript c помощью инструмента Prettier.
Во время этой задачи используются правила ESLint в качестве единого источника
правды.
