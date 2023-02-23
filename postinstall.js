import { existsSync } from 'node:fs'
import { copyFile, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

try {
  const workDir = process.env.INIT_CWD
  const packageDir = process.cwd()

  const packageJsonPath = join(workDir, 'package.json')
  const packageJson = await readFile(packageJsonPath, 'utf-8')
  const parsedPackageJson = JSON.parse(packageJson)
  parsedPackageJson.scripts.format = 'prettier --write **/*.{ts,tsx}'

  await writeFile(
    packageJsonPath,
    JSON.stringify(parsedPackageJson, null, 2) + '\n',
    'utf-8'
  )

  const prettierConfigPath = join(workDir, '.prettierrc.cjs')
  if (!existsSync(prettierConfigPath)) {
    await copyFile(join(packageDir, '.prettierrc.cjs'), prettierConfigPath)
  }

  console.log(`
    @crashmax/prettier-config installed successfully!
    Add "format": "prettier --write **/*.{ts,tsx}" script to your package.json and run "npm run format" to format your code.
  `)
} catch (err) {
  console.log(err)
}
