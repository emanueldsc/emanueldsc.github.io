---
title: Criando um Blog no Github com angular sem arrudeios
slug: Criando-um-Blog-no-Github-com-angular-sem-arrudeios
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

Pronto, projeto configurado, criamos agora uma pasta que vai armazenas nossos posts. Dentro da pasta assets criamos uma nova pasta chamada **mdfiles**.

<img style="object-fit: contain; height: 500px;" src="assets/images/blog_angular/img2.png">

## Configurando o Github Pages

Ná área principal do seu reposiótio abra a area de configurações.

<img src="assets/images/blog_angular/img1.png">

Ápos entrar na área de configurações procure a opção **pages** e na sessão **Branch** selecione 

