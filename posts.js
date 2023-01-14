const fs = require('fs')
const matter = require('gray-matter')

const pathFiles = './src/assets'

const pathMdFiles = `${pathFiles}/mdfiles`
const pathJsonFiles = `${pathFiles}/jsonposts`

const files = fs.readdirSync(pathMdFiles, 'utf8')

const jsonNamesGenerated = []

const listAllPosts = files.map(fileName => {
    const file = fs.readFileSync(`${pathMdFiles}/${fileName}`, 'utf-8')
    const { data, content } = matter(file)
    const jsonFileData = { data, content }
    const pathToSavePost = `${pathJsonFiles}/${data.slug}.json`
    jsonNamesGenerated.push(pathToSavePost)
    fs.writeFileSync(
        pathToSavePost, 
        JSON.stringify(jsonFileData), 
        { encoding: 'utf-8' }
    )
    return data
})


fs.writeFileSync(
    `${pathJsonFiles}/listAllPosts.json`,
    JSON.stringify(listAllPosts),
    { encoding: 'utf-8' }
)

var finishMessage = `generated files:\n\t${pathJsonFiles}/listAllPosts.json\n`

jsonNamesGenerated.forEach(filename => {
    finishMessage += `\t${filename}\n`
})

console.log(finishMessage)
