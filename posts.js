const fs = require('fs')
const matter = require('gray-matter')

const pathFiles = './src/assets/mdfiles'

fs.rmSync(`${pathFiles}/mdfiles.json`)

const files = fs.readdirSync(pathFiles, 'utf8')

const data = files.map(fileName => {
    const file = fs.readFileSync(`${pathFiles}/${fileName}`, 'utf-8')
    const { data, content } = matter(file)
    const summary = `${content.substring()}...`
    const jsonData = { summary, ...data, fileName }
    return jsonData
})

const jsonData = data

const endPathName = `${pathFiles}/mdfiles.json`

fs.writeFileSync(endPathName, JSON.stringify(jsonData), { encoding: 'utf-8' })

console.log('...finished')