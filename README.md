# `@crashmax/prettier-config`

> My personal [Prettier](https://prettier.io) config.

## Usage

**Install**:

```bash
$ pnpm add --dev @crashmax/prettier-config
```

**Edit `package.json`**:

```json
{
  "prettier": "@crashmax/prettier-config",
  "scripts": {
    "prettier": "prettier --check --ignore-unknown '**/*.{ts,tsx,js,jsx}'",
    "prettier:fix": "prettier --write --ignore-unknown '**/*.{ts,tsx,js,jsx}'"
  }
}
```
