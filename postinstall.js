import { existsSync } from 'node:fs'
import { copyFile, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

try {
  const workDir = process.env.INIT_CWD
  const packageDir = process.cwd()

  const packageJsonPath = join(workDir, 'package.json')
  const packageJson = await readFile(packageJsonPath, 'utf-8')
  const parsedPackageJson = JSON.parse(packageJson)
  parsedPackageJson.scripts.format = 'prettier --write --ignore-unknown **'

  await writeFile(
    packageJsonPath,
    JSON.stringify(parsedPackageJson, null, 2) + '\n',
    'utf-8'
  )

  const prettierIgnorePath = join(workDir, '.prettierignore')
  if (!existsSync(prettierIgnorePath)) {
    await copyFile(join(packageDir, '.prettierignore'), prettierIgnorePath)
  }

  const prettierConfigPath = join(workDir, '.prettierrc.cjs')
  if (!existsSync(prettierConfigPath)) {
    await copyFile(join(packageDir, '.prettierrc.cjs'), prettierConfigPath)
  }

  console.log('@crashmax/prettier-config installed successfully!')
} catch (err) {
  console.log(err)
}
