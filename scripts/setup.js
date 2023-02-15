import { copyFile, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

try {
  const workDir = process.cwd()
  const packageJsonPath = join(workDir, 'package.json')
  const packageJson = await readFile(packageJsonPath, 'utf-8')
  const parsedPackageJson = JSON.parse(packageJson)
  parsedPackageJson.scripts.format = 'prettier --write --ignore-unknown **'

  await writeFile(
    packageJsonPath,
    JSON.stringify(parsedPackageJson, null, 2) + '\n',
    'utf-8'
  )
  await copyFile('.pretterignore', workDir)
  await copyFile('.prettierrc.cjs', workDir)

  console.log('@crashmax/prettier-config installed successfully!')
} catch (err) {
  console.log(err)
}
