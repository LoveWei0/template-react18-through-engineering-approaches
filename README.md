# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

* pnpm add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
  新建.eslintignore and .eslintrc

```json
{
	"root": true,
	"parser": "@typescript-eslint/parser",
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/eslint-recommended"
	],
	"plugins": ["@typescript-eslint"]
}
```

- pnpm add -D husky
- npx husky install
  > package.json->script{"prepare": "husky install",}

* npx husky add .husky/pre-commit "pnpm run lint"

- pnpm add -D lint-staged
  新建.lintstagedrc.js

```js
const { ESLint } = require('eslint')

const removeIgnoredFiles = async (files) => {
	const eslint = new ESLint()
	const ignoredFiles = await Promise.all(
		files.map((file) => eslint.isPathIgnored(file))
	)
	const filteredFiles = files.filter((_, i) => !ignoredFiles[i])
	return filteredFiles.join('')
}

module.exports = {
	'*': async (files) => {
		const filesToLint = await removeIgnoredFiles(files)
		return [`eslint ${filesToLint} --max-warnings=0`]
	},
}
```

- pnpm add -D @commitlint/cli @commitlint/config-conventional
  新建.commitlintrc.json

```json
{
	"extends": ["@commitlint/config-conventional"],
	"rules": {
		"scope-empty": [2, "never"]
	}
}
```

- npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
- pnpm add -D commitizen cz-conventional-changelog
  新建.czrc
