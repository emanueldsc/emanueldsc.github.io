---
title: "Criando Componentes Standalone em Angular"
summary: "Aprenda como criar e usar componentes standalone no Angular para construir aplicações modulares e reutilizáveis."
date: "25/08/2024"
author: "Emanuel Douglas Sousa Costa"
thumb: "/images/components.jpg"
---

# Criando Componentes Standalone em Angular

## Objetivo da post

Neste post, você aprenderá a criar e utilizar componentes standalone no Angular. Componentes standalone são uma nova funcionalidade que permite construir aplicações de forma mais modular e reutilizável, sem a necessidade de declarar cada componente em um módulo.

## O que você aprenderá

- A diferença entre componentes tradicionais e componentes standalone.
- Como criar um componente standalone no Angular.
- Como importar e utilizar componentes standalone em outros componentes e módulos.
- Boas práticas para organizar componentes standalone em projetos Angular.

## 1. O Que São Componentes Standalone?

Componentes standalone são uma novidade no Angular que permite criar componentes independentes, sem a necessidade de declará-los em um módulo Angular. Isso facilita o desenvolvimento de componentes que são mais modulares e reutilizáveis, simplificando a estrutura do código e reduzindo a complexidade do gerenciamento de módulos.

### Benefícios dos Componentes Standalone

- **Redução da complexidade**: Não é necessário gerenciar módulos para cada componente, o que simplifica a estrutura da aplicação.
- **Modularidade**: Componentes standalone podem ser facilmente reutilizados em diferentes partes da aplicação ou em diferentes projetos.
- **Carregamento mais rápido**: Menos dependências e declarações de módulo podem levar a um tempo de carregamento inicial mais rápido.
- **Facilidade de manutenção**: Com menos arquivos e configurações para gerenciar, a manutenção do código é simplificada.

Componentes standalone diferem dos componentes tradicionais do Angular, pois eles não precisam ser declarados em um módulo `NgModule`. Em vez disso, eles são diretamente importados e utilizados, tornando o desenvolvimento mais direto e intuitivo.

## 2. Criando um Componente Standalone

Criar um componente standalone no Angular é simples e pode ser feito usando o Angular CLI com um comando específico. Um componente standalone é criado com a propriedade `standalone: true` e é decorado com o `Component`.

### Passos para Criar um Componente Standalone

Para criar um componente standalone, siga os passos abaixo:

1. **Abra o terminal no diretório do seu projeto Angular.**
2. **Use o Angular CLI para criar o componente standalone:**

```bash
ng generate component nome-do-componente --standalone
```

Por exemplo, para criar um componente de cabeçalho chamado HeaderComponent, execute:

```bash
ng generate component header --standalone
```

## 3. Examine o Código Gerado:

O comando acima criará um novo arquivo header.component.ts com o seguinte conteúdo:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true
})
export class HeaderComponent { }

```

Note que a propriedade standalone: true é incluída no decorador @Component.

### Exemplo Prático: Criando um Componente de Cabeçalho Standalone

Vamos criar um componente de cabeçalho simples que exibirá o título da aplicação.

### 1. Crie o Componente:

Execute o comando para criar o componente standalone:

```bash
ng generate component header --standalone
```

### 2. Atualize o Template do Componente:

No arquivo `headers.component.html` adicione o segunte código:

```html
<header class="app-header">
  <h1>Minha Aplicação Angular</h1>
</header>
```

### 3. Adicione estilos:

No arquivo `header.component.css`, adicione estilos para o cabeçalho:

```css
.app-header {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
}
```

### 4. Utilize o Componente Standalone:

Para usar o `HeaderComponent` standalone em outros componentes ou módulos, basta importá-lo diretamente:

```typescript
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  template: `
    <app-header></app-header>
    <div>
      <!-- Conteúdo do aplicativo -->
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
```

Agora você tem um componente standalone funcional que pode ser facilmente importado e reutilizado em outros componentes ou módulos da sua aplicação Angular.

## 3. Utilizando Componentes Standalone em Outros Componentes

Uma das vantagens dos componentes standalone é a facilidade com que eles podem ser importados e utilizados em outros componentes e módulos da aplicação. Por não estarem vinculados a um módulo específico, componentes standalone podem ser reutilizados em qualquer lugar da aplicação sem a necessidade de inclusão no array de declarações de um módulo.

### Como Importar e Utilizar Componentes Standalone

Para utilizar um componente standalone em outro componente ou módulo, é necessário importá-lo diretamente no componente ou módulo em que será utilizado.

#### Exemplo de Uso em Outro Componente

Suponha que você tenha um componente standalone `ButtonComponent` e queira usá-lo em um componente chamado `DashboardComponent`. Veja como fazer isso:

1. **Crie o Componente Standalone `ButtonComponent`:**

Use o Angular CLI para criar o componente standalone:

```bash
ng generate component button --standalone
```

Isso gerará um componente com a propriedade standalone: true no decorador @Component.

### 2. Utilize o ButtonComponent no DashboardComponent:

No arquivo `dashboard.component.ts`, importe o `ButtonComponent` e adicione-o ao array `imports` do decorador `@Component`:

```typescript
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <h2>Dashboard</h2>
    <app-button></app-button>
  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent { }
```

No exemplo acima, o `ButtonComponent` é adicionado ao array `imports` do `DashboardComponent`, permitindo que seja utilizado no template do componente.

## Exemplos de Utilização em Templates

Componentes standalone podem ser utilizados em templates de maneira similar aos componentes tradicionais. Aqui estão alguns exemplos de utilização:

- Uso em um Template Inline:

```typescript
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent],
  template: `
    <app-header></app-header>
    <app-button></app-button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }

```

- Uso em um Template Externo:

```html
<app-header></app-header>
<div class="content">
  <app-button></app-button>
</div>
```

E no arquivo `app.component.ts`:

```typescript
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
```

## Conclusão

Ao utilizar componentes standalone, você simplifica a estrutura do projeto e facilita a reutilização de componentes em diferentes partes da aplicação. Isso resulta em um código mais modular e de fácil manutenção, além de permitir um desenvolvimento mais ágil.

Com esses conhecimentos, você agora está pronto(a) para aplicar componentes standalone em suas próprias aplicações Angular, tornando-as mais organizadas e eficientes.