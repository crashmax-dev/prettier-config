# `@crashmax/prettier-config`

> My personal [Prettier](https://prettier.io) config.

## Usage

**Install**:

```bash
$ pnpm add @crashmax/prettier-config -D
```

**Edit `package.json`**:

```json
{
  "prettier": "@crashmax/prettier-config",
  "scripts": {
    "format": "prettier --check --ignore-unknown '**/*.{ts,tsx,js,jsx}'",
    "format:fix": "prettier --write --ignore-unknown '**/*.{ts,tsx,js,jsx}'"
  }
}
```
