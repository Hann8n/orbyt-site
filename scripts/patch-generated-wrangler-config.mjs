import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const wranglerConfigPath = resolve(process.cwd(), 'dist/server/wrangler.json')

try {
  const raw = await readFile(wranglerConfigPath, 'utf8')
  const config = JSON.parse(raw)

  // Work around Wrangler no-bundle behavior that can serialize SSR responses as [object Object].
  if (config.no_bundle !== false) {
    config.no_bundle = false
    await writeFile(wranglerConfigPath, `${JSON.stringify(config)}\n`, 'utf8')
    console.log('Patched dist/server/wrangler.json: set no_bundle=false')
  } else {
    console.log('dist/server/wrangler.json already has no_bundle=false')
  }
} catch (error) {
  console.error('Failed to patch generated Wrangler config:', error)
  process.exitCode = 1
}
