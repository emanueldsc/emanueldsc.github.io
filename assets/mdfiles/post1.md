---
title: Criando um Blog no Github com Angular sem arrudeios
slug: criando-um-blog-no-github-com-angular-sem-arrudeios
featureImage: assets/images/blog_angular/cover.jpg
date: 13/01/2023
---

# Criando um Blog no Github com angular sem arrudeios

Serei breve, como na maioria das minhas publicações.

Pressupondo que você já tem uma conta no Github crie um repositório com o nome respeitando o seguinte formato

```
<nome-so-seu-repositorio>.github.com
```

Após a criar o repossitório teremos um repositório especial que serve como sua página pessoal com endereço personalizado do Github. Porem o repositório vem vazio e teremos de configurar os estáticos para apresentação de nossa página pessoal.

> Obs: Se você escrever um arquivo README.md esse arquivo ja servirar de home-page, porem o que queremos aqui é mostrar como criar algo mais avançado, como um site pessoal com areas especificas de contatos, blog etc.

## Preparando o projeto angular

Crie um Projeto Angular simples, nomei-o como quiser.

```
ng new <nome-do-projeto>
```

Após a criação do projeto instale as seguintes libs para auxiliar na leitura do markdown, esse formato será utilizado para escrever os posts do blog

```
npm install clipboard gray-matter katex mermaid ngx-markdown prismjs --save
```

Pronto, projeto configurado, vamos criar agora uma pasta que vai armazenas nossos posts, dentro da pasta assets criamos três novas pastas para armazenas nossas postagens, são elas:

- **mdfiles** // para guardar os posts escritos em markdown. Sugiro que coloque alguns arquivos markdown para servirem de exemplos
- **jsonposts** // para armazenar os posts transpilados em json. 
- **images** // para guardar as imagens utilizadas nas publicações.

<img style="object-fit: contain; height: 500px;" src="assets/images/blog_angular/img2.png">

Arquivo markdown de exemplo `postExemplo.md`

```
---
title: Titulo de Exemplo
slug: post-exemplo
featureImage: assets/images/blog_angular/cover.jpg
date: 13/01/2023
---

# Titulo

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nunc enim. Duis at maximus augue, nec laoreet enim. Curabitur nunc mi, eleifend id nunc eu, consequat consequat risus. Aliquam quis nisi sed sapien placerat placerat. Morbi sed enim et augue luctus feugiat a in ipsum. Nullam vulputate suscipit quam in aliquam. Donec pharetra, risus vel pellentesque tempor, arcu odio facilisis odio, at feugiat neque augue id ante.

```



## Criando builder para gerar os arquivos estáticos dos posts

Essa parte não utiliza Angular propriamente dito, porem é essencial para que tenhamos os arquivos necessários para cada post.
Na raiz do projeto criamos um arquivo chamado **posts.js**:

```javascript
const fs = require('fs')
const matter = require('gray-matter')

// Caminho das pastas e arquivos gerados
const pathFiles = './src/assets'
const pathMdFiles = `${pathFiles}/mdfiles`
const pathJsonFiles = `${pathFiles}/jsonposts`

const files = fs.readdirSync(pathMdFiles, 'utf8')

// Variável auxiliar para output visual no terminal
const jsonNamesGenerated = []

// Gerando os arquivos <posts>.json
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

// Gerando o arquivo de listagem dos posts
fs.writeFileSync(
    `${pathJsonFiles}/listAllPosts.json`,
    JSON.stringify(listAllPosts),
    { encoding: 'utf-8' }
)

// Mensagem com informação dos arquivos gerados.
var finishMessage = `generated files:\n\t${pathJsonFiles}/listAllPosts.json\n`

jsonNamesGenerated.forEach(filename => {
    finishMessage += `\t${filename}\n`
})

console.log(finishMessage)

```
O Arquivos posts.js será executado com o comando:

```
node posts.js
```

Ao checar a pasta **assets/jsonposts** você notará que vários arquivos json foram criados.
Cada arquivo representa um post.

O arquivos **listAllposts.json** é um mapa com os metadados de todos os posts gerados

> Obs: toda vez que você modificar/criar um post, será necessário re-executar o comando:

```node posts.json```

Nosso base de dados esta 

## Configurando o Github Pages

Ná área principal do seu reposiótio abra a area de configurações.

<img src="assets/images/blog_angular/img1.png">

Ápos entrar na área de configurações procure a opção **pages** e na sessão **Branch** selecione 

