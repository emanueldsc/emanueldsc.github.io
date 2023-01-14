const fs = require('fs')
const matter = require('gray-matter')

const pathFiles = './src/assets'

const pathMdFiles = `${pathFiles}/mdfiles`
const pathJsonFiles = `${pathFiles}/jsonposts`

const files = fs.readdirSync(pathMdFiles, 'utf8')

const listAllPosts = files.map(fileName => {
    const file = fs.readFileSync(`${pathMdFiles}/${fileName}`, 'utf-8')
    const { data, content } = matter(file)
    console.log(data)
    const jsonFileData = { data, content }
    const pathToSavePost = `${pathJsonFiles}/${data.slug}.json`
    fs.writeFileSync(pathToSavePost, JSON.stringify(jsonFileData), { encoding: 'utf-8' })
    return data
})


fs.writeFileSync(`${pathJsonFiles}/listAllPosts.json`, JSON.stringify(listAllPosts), { encoding: 'utf-8' })




// const jsonData = data

// const endPathName = `${pathFiles}/mdfiles.json`

// fs.writeFileSync(endPathName, JSON.stringify(jsonData), { encoding: 'utf-8' })

// console.log('...finished')