---
title: Criando um Blog no Github com Angular sem arrudeios
slug: criando-um-blog-no-github-com-angular-sem-arrudeios
featureImage: assets/images/blog_angular/cover.jpg
date: 13/01/2023
---

# Criando um Blog no Github com angular sem arrudeios

Pressupondo que você já tem uma conta no Github crie um repositório com o nome respeitando o seguinte formato

```
<nome-so-seu-repositorio>.github.com
```

Após a criar o repossitório teremos um repositório especial que serve como sua página pessoal com endereço personalizado do Github. Porém o repositório vem vazio e teremos de configurar os estáticos para apresentação de nossa página pessoal.

> Obs: Se você escrever um arquivo README.md esse arquivo ja servirar de home-page, porém o que queremos aqui é mostrar como criar algo mais avançado, como um site pessoal com areas especificas de contatos, blog etc.

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

> Obs: toda vez que você modificar/criar um post, será necessário re-executar o comando: **node posts.js**

Nosso base de dados esta pronta.

## Criando componente de listagem de Posts.

O arquivo **listallPosts.json** que esta na pasta **assets/jsonposts** servirá de base de dados para listar todos os posts escritos no blog (Aqui utilizaremos apenas a lógica de listagem de todos os aquivos, mas podemos fazer pequenas modificações para criar arquivos de paginação a posteriore.).

Precisamos antes de gerar o component de listagem de posts, temos que gerar o serviço que será o encarregado de puxar os aquivos json e torná-los disponíveis os dados a nossa aplicação.

```
ng g s services/Blog
```

Será gerado um arquivo na src/app/services/blog.service.ts

blog.service.ts
```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  ALL_POSTS = 'assets/jsonposts/listAllPosts.json'
  POSTS_PATH = 'assets/jsonposts'

  listAllPosts = (): Observable<any[]> => this.httpClient.get<any[]>(ALL_POSTS)

  getPostBySlug = (slug: string): Observable<any> => this.httpClient.get<any>(`${POSTS_PATH}/${slug}.json`)

  constructor(
    private httpClient: HttpClient
  ){ }
  
}
```

Esse serviço tem a responsabilidade de pegar os aquivos json gerados e disponibilizalos como dados para nossa a aplicação Angular.

A função **listAllPosts**, tem o nome auto explicativo. E a função **getPostBySlug** vai pegar os post pelo nome do arquivo json correspondente.

Página de listágem

```
ng g c pages/Blog
```

O comando diz ao AngularCli para gerar os arquivos necessários para criar um novo componente Angular. Esse componnete será utilizado para listagem dos posts

blog.component.ts
```typescript
import { Component, OnInit } from '@angular/core';
import { MetaDataPost } from 'src/app/models/MetaDataPost';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {

  posts: any[] = []

  ngOnInit(): void {
    this.blogService.listAllPosts().subscribe(posts => {
      this.posts = posts
    })
  }

  constructor(
    private blogService: BlogService
  ) { }

}
```

Html da página de listagem

blog.component.html
```html
<div class="masonry-with-columns">

    <section>
        <ng-container *ngFor="let post of posts">

                <div [routerLink]="[post.slug]" class="box">
                    <img [src]="post.featureImage" alt="Cover Image">
                    <div class="content">
                        <h2>{{post.title}}</h2>
                    </div>
                </div>
                
        </ng-container>
    </section>

</div>
```

Sass da página de postagem.

blog.component.sass
```css
section
    max-width: 100%
    padding: 16px
    margin: 0 auto
    columns: 4
    column-gap: 16px

    @media (max-width: 400px)
        columns: 3

    .box
        margin-bottom: 10px
        break-inside: avoid-column
        cursor: pointer

        img
            border-radius: 8px
            box-shadow: 1px 1px 4px black
            max-width: 100%
            width: 100%
            display: block

        .content
            *
                margin: 8px 4px
```

Quem preferir usar css, segue a baixo a versão em css

blog.component.css
```css
section {
     max-width: 100%;
     padding: 16px;
     margin: 0 auto;
     columns: 4;
     column-gap: 16px;
}
 @media (max-width: 400px) {
     section {
         columns: 3;
    }
}
 section .box {
     margin-bottom: 10px;
     break-inside: avoid-column;
     cursor: pointer;
}
 section .box img {
     border-radius: 8px;
     box-shadow: 1px 1px 4px black;
     max-width: 100%;
     width: 100%;
     display: block;
}
 section .box .content * {
     margin: 8px 4px;
}
```

E por final, basta configurar a rota no arquivo **app-routing.module.ts**, para a listagem de posts.

app-routing.module.ts
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  { path: '', redirectTo: 'blog' },
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

Agora temos a rota **/blog** que faz a listagem de todas as postagens.

## Criando a página de leitura do Artigo.

No cli criamos o component.

```
ng g c pages/Post
```

Escrevendo o conteúdo do arquivo **app/pages/post/Postpost.component.ts**

post.component.ts
```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'edsc-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  post!: any

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.post = data['PostResolver']
    })
  }

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }
  
}
```

As diretivas **markdown mermaid katex clipboard** são das bibliotecas que intalamos no começo desse artigo.

> [data]="<conteúdo>"  pertence a diretiva **markdown**. Aqui vai o conteúdo markdown, que está na variável post.conent, que será transformado em HTML

post.component.html
```html
<div class="md-container">
    <div class="image-container" [ngStyle]="{'background-image': 'url('+post.data.featureImage+')'}">
        <img [src]="post.data.featureImage">
    </div>
    <div markdown mermaid katex clipboard [data]="post.content"></div>
</div>
```

## _Uma coisinha a mais para estilização do conteúdo em markdown_

Adicione o o conteúdo no final  do arquivo **styles.(css/sass/scss)** localizado na raiz da sua aplicação.

styles.sass
```css
div[markdown]

    blockquote
        border-left: .5rem solid #7e7e7e
        margin: 1rem 0
        padding-left: 3rem
        font-style: italic
        color: #757575

    >img
        width: 100%

    .markdown-clipboard-button
        background: transparent
        border: 1px solid white
        color: white 
        border-radius: 4px

        &:hover
            background-color: rgba(255, 255, 255, .5)
        
        &:active
            background-color: rgba(255, 255, 255, .3)

        &::before
          content: "copy"
```
ou a versão em css.

styles.sass
```css
div[markdown] blockquote {
     border-left: .5rem solid #7e7e7e;
     margin: 1rem 0;
     padding-left: 3rem;
     font-style: italic;
     color: #757575;
}
div[markdown] > img {
     width: 100%;
}
div[markdown] .markdown-clipboard-button {
     background: transparent;
     border: 1px solid white;
     color: white;
     border-radius: 4px;
}
div[markdown] .markdown-clipboard-button:hover {
     background-color: rgba(255, 255, 255, 0.5);
}
div[markdown] .markdown-clipboard-button:active {
     background-color: rgba(255, 255, 255, 0.3);
}
div[markdown] .markdown-clipboard-button::before {
     content: "copy";
}
 
```

## Configurando o Github Pages

Pronto aplicação pronta, agora temos que configurar o nosso github e subir o projeto

Ná área principal do seu reposiótio clique em "Settings"

<img src="assets/images/blog_angular/img1.png">

Em Settings, no menu lateral a esquerda, clique em **Pages** escolha a opção **Deploy from a branch** e em branch deixe marcado como none, nos vamos configurar o branch com um pluguin do angular **angular-cli-ghpages**.]

<img src="assets/images/blog_angular/img3.png">

Voltando ao projeto vamos instalar a bibliotega **angular-cli-ghpages**

```
ng add angular-cli-ghpages
```

Após instalar o angular-cli-ghpage vamos chegar o arquivo **angular.json** e veremos que no final do arquivo, foi adicionado um atributo a mais nas configurações do projeto.

```json
...
"deploy": {
        "builder": "angular-cli-ghpages:deploy",
        "options": {
        "baseHref": "/"
    }
}
...
```

Pronto agora com as configurações concluidas faça o build do projeto

```
ng build --output-path docs
```

Commit as alterações

```shell
git add .
```
```shell
git commit -m "<menssagem-qualquer-do-commit>"
```
```shell
git push
```

E por fim utilizamos o pluguin angular-cli-ghpages para publicar a nossa aplicação.

```
ng deploy
```

Voltando ao Projeto clique na aba actions

<img src="assets/images/blog_angular/img5.png">

Seu projeto deve esta fazendo deploy 


Ao final do processo, será disponibilizada uma página com o link correspondente ao nome do seu repositorio

<p style="color: blue; text-decoration: underline"> seurepositorio.github.io </p>









