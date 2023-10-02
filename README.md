# `@crashmax/prettier-config`

> Here is my personal [Prettier](https://prettier.io) config.

## Install

```sh
npm install @crashmax/prettier-config -D
```

```sh
yarn add @crashmax/prettier-config -D
```

```sh
pnpm add @crashmax/prettier-config -D
```

## Usage

```js
// .prettierrc.cjs
module.exports = require('@crashmax/prettier-config')
```

### Copy the ignore file to your project folder

If you want to extend the ignore file, run the following command in the root of your project folder:

```bash
# unix
cp node_modules/@crashmax/prettier-config/.prettierignore .prettierignore

# windows
copy node_modules/@crashmax/prettier-config/.prettierignore .prettierignore
```

It will copy the `.prettierignore` from `@crashmax/prettier-config` to your project root folder.

### Scripts

Some commonly used scripts in `package.json`.

```json
{
  "scripts": {
    "format": "prettier --write \"**/*.{js,ts,tsx,json}\""
  }
}
```

## Related

- [Prettier](https://github.com/prettier/prettier) - an opinionated code formatter.
- [Prettier - Sharing configurations](https://prettier.io/docs/en/configuration.html#sharing-configurations) - Document on sharing prettier configurations.
- [Prettier - Ignore Code](https://prettier.io/docs/en/ignore.html) - Use `.prettierignore` to ignore certain files and folders completely.
- [prettier-plugin-sort-imports](https://github.com/ianvs/prettier-plugin-sort-imports) - A prettier plugin to sort imports in typescript and javascript files by the provided RegEx order.
- [prettier-plugin-multiline-arrays](https://github.com/electrovir/prettier-plugin-multiline-arrays) - Prettier plugin to force array elements to wrap onto new lines.
