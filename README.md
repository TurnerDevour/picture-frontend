# picture-frontend

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Environment variables

Vite automatically loads the environment file for the active mode:

| Command | Mode | API base URL variable |
| --- | --- | --- |
| `npm run dev` | development | `.env.development` |
| `npm run build` | production | `.env.production` |

Set `VITE_API_BASE_URL` in the corresponding file. For machine-specific overrides, create
`.env.development.local` or `.env.production.local`; these files are ignored by Git.

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
