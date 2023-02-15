import { spawn } from 'node:child_process'

spawn('node scripts/setup.js', { stdio: 'inherit', shell: true })
