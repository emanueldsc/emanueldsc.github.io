---
title: "Preparando o Ambiente"
summary: "Saiba como preparar seu ambiente para começar com Angular."
date: "24/08/2024"
thumb: "/images/angular.jpg"
---

# Preparando o Ambiente

Bem-vindo(a) à primeira aula do nosso curso completo de Angular! Nesta série de posts, vamos explorar o universo do desenvolvimento web com Angular, desde os conceitos mais básicos até os tópicos avançados. O objetivo deste curso é capacitar você a criar aplicações web robustas, eficientes e escaláveis utilizando Angular, uma das principais ferramentas do mercado.

## Objetivo da Aula

Nesta aula introdutória, você aprenderá a configurar seu ambiente de desenvolvimento e terá uma visão geral do que vamos abordar ao longo do curso. Vamos preparar o terreno para que você esteja pronto(a) para começar a desenvolver aplicações web modernas com Angular.

### O que você aprenderá

- A importância do Angular no desenvolvimento de aplicações web.
- Como configurar o ambiente de desenvolvimento para começar a programar.
- Estrutura básica de um projeto Angular.

## 1. O Que é Angular?

Angular é um framework open-source desenvolvido pela Google para a construção de aplicações web modernas e dinâmicas. Baseado em TypeScript, uma extensão do JavaScript que adiciona tipagem estática ao código, Angular é uma ferramenta poderosa que permite o desenvolvimento de aplicações de página única (Single Page Applications - SPAs) com uma experiência de usuário fluida e semelhante a aplicações nativas.

## 2. Por Que Usar Angular?

O Angular é amplamente utilizado no desenvolvimento web devido a várias características que o tornam uma escolha preferida entre os desenvolvedores:

- **Modularidade:** Angular permite organizar a aplicação em módulos, tornando o código mais fácil de manter e escalável.
- **Injeção de Dependência:** Facilita a gestão de dependências entre componentes e serviços, promovendo um código mais reutilizável e testável.
- **Ferramentas Poderosas:** O Angular CLI (Command Line Interface) facilita a criação e configuração de projetos, além de oferecer ferramentas para teste, otimização e muito mais.
- **Comunidade Ativa e Suporte da Google:** O Angular é suportado por uma comunidade vibrante e pela Google, garantindo constantes atualizações, novas funcionalidades e melhorias de desempenho.

## 3. Configurando o Ambiente de Desenvolvimento

Antes de começarmos a codificar com Angular, é essencial configurar o ambiente de desenvolvimento adequado. Vamos passar pelos passos necessários para garantir que você esteja pronto(a) para iniciar sua jornada com Angular.

### Passo 1: Instalar Node.js e npm

Angular depende do Node.js e do npm (Node Package Manager) para o gerenciamento de pacotes e dependências. Primeiro, precisamos instalar o Node.js, que inclui o npm por padrão.

- **Windows/Mac:** Visite o site oficial do Node.js [Node.js](https://nodejs.org/) e baixe o instalador apropriado para o seu sistema operacional.
- **Linux:** Use o gerenciador de pacotes da sua distribuição (por exemplo, apt para Ubuntu) para instalar o Node.js.

Após a instalação, verifique se o Node.js e o npm foram instalados corretamente executando os seguintes comandos no terminal ou prompt de comando:

```
node -v npm -v
```

Esses comandos devem exibir as versões instaladas do Node.js e npm.

### Passo 2: Instalar o Angular CLI

O Angular CLI é uma ferramenta de linha de comando que facilita o desenvolvimento com Angular, permitindo criar, desenvolver e manter projetos de forma eficiente. Para instalar o Angular CLI globalmente, execute o seguinte comando:

```
npm install -g @angular/cli
```

Depois que a instalação for concluída, verifique a versão instalada do Angular CLI com o comando:

```
ng version
```

### Passo 3: Criar um Novo Projeto Angular

Agora que o Angular CLI está instalado, vamos criar um novo projeto Angular para iniciar nosso aprendizado:

```
ng new meu-primeiro-projeto
```

Durante o processo de criação, o Angular CLI fará algumas perguntas para configurar o projeto:

1. **Would you like to add Angular routing?** (Gostaria de adicionar roteamento Angular?) — Responda "Yes" para configurar o roteamento desde o início.
2. **Which stylesheet format would you like to use?** (Qual formato de folha de estilo você gostaria de usar?) — Escolha o formato de folha de estilo que preferir, como CSS, SCSS, etc.

Após a configuração inicial, o Angular CLI criará um novo diretório com o nome do projeto e configurará o ambiente básico. Para iniciar o servidor de desenvolvimento, navegue até a pasta do projeto e execute:

```
cd meu-primeiro-projeto ng serve
```

Abra o navegador e acesse [http://localhost:4200/](http://localhost:4200/) para visualizar sua nova aplicação Angular em execução.

## 4. Estrutura Básica de um Projeto Angular

Com o projeto criado, vamos explorar a estrutura de arquivos e pastas para entender como o Angular organiza o código:

- **`src/`**: Contém todo o código-fonte da aplicação.
  - **`app/`**: O diretório principal da aplicação, onde ficam os módulos e componentes principais.
  - **`assets/`**: Um local para armazenar arquivos estáticos, como imagens, ícones e outros recursos.
  - **`environments/`**: Contém arquivos de configuração para diferentes ambientes (desenvolvimento, produção, etc.).
- **`angular.json`**: Arquivo de configuração do Angular CLI, contendo definições sobre o projeto e suas dependências.
- **`package.json`**: Lista as dependências do projeto e scripts npm que ajudam na automação de tarefas.

## 5. Próximos Passos

Agora que seu ambiente de desenvolvimento está configurado e você tem uma compreensão básica da estrutura de um projeto Angular, estamos prontos para avançar. Na próxima aula, exploraremos mais a fundo os componentes standalone, que são a base de qualquer aplicação Angular.

Prepare-se para mergulhar de cabeça no desenvolvimento com Angular e descobrir todas as possibilidades que este framework incrível tem a oferecer.
