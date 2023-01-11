const fs = require('fs')
const pathFiles = './src/assets/mdfiles'
const files = fs.readdirSync(pathFiles, 'utf8')
const jsonPaths = { files }
const endPathName = `${pathFiles}/mdfiles.json`
console.log(endPathName)
fs.writeFileSync(endPathName, JSON.stringify(jsonPaths), { encoding: 'utf-8' })
console.log('...finished')