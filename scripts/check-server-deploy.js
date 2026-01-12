const fs = require('fs')
const path = require('path')

const rootDir = process.cwd()
let hasErrors = false

console.log('🔍 Checking deployment...\n')

// Check server.js
if (!fs.existsSync(path.join(rootDir, 'server.js'))) {
  console.error('❌ server.js not found')
  hasErrors = true
} else {
  console.log('✅ server.js')
}

// Check .next build
if (!fs.existsSync(path.join(rootDir, '.next'))) {
  console.warn('⚠️  Run: npm run build')
} else {
  console.log('✅ .next build')
}

// Check node_modules
if (!fs.existsSync(path.join(rootDir, 'node_modules'))) {
  console.warn('⚠️  Run: npm install')
} else {
  console.log('✅ node_modules')
}

if (hasErrors) {
  process.exit(1)
}

console.log('\n✅ Ready to deploy\n')
