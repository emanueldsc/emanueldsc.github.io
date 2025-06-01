---
title: "Angular - Linha do tempo"
summary: "Compilado com todas as funcionalidades com Exemplo sobre a evolução do Angular."
date: "01/06/2025"
thumb: "/images/angular-timeline.png"
---


| Sumário |         |         |         |         |
| ------ | ------ | ------ | ------ | ------ |
| [Angular 2](#) | [Angular 4](../angular-timeline-4) | [Angular 5](#introdução) | [Angular 6](#introdução) | [Angular 7](#introdução) |
| [Angular 8](#introdução) | [Angular 9](#introdução) | [Angular 10](#introdução) | [Angular 11](#introdução) | [Angular 12](#introdução) |
| [Angular 13](#introdução) | [Angular 14](#introdução) | [Angular 15](#introdução) | [Angular 16](#introdução) | [Angular 17](#introdução) |
| [Angular 18](#introdução) | [Angular 19](#introdução) | [Angular 20](#introdução) |         |         |

![Angular - Linha do tempo](/images/angular-timeline.png "Angular - Linha do tempo")

# Angular 2 (Angular sem o JS)

## TypeScript como Linguagem Principal

O Angular 2 adotou o TypeScript como a linguagem padrão. O TypeScript é um superset do JavaScript que adiciona tipagem estática opcional, interfaces e outras funcionalidades de linguagens orientadas a objetos, melhorando a qualidade do código, a detecção de erros em tempo de desenvolvimento e a experiência do desenvolvedor.

```Typescript
// user.interface.ts
export interface User {
  id: number;
  name: string;
  email?: string; // Propriedade opcional
}
```

```Typescript
// user.service.ts
import { Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable() // Indica que esta classe pode ser injetada
export class UserService {
  private users: User[] = [
    { id: 1, name: 'João Silva', email: 'joao@example.com' },
    { id: 2, name: 'Maria Souza' }
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined { // Retorna User ou undefined
    return this.users.find(user => user.id === id);
  }
}
```

## Arquitetura Baseada em Componentes:

Esta é a mudança mais fundamental. Em vez de controladores e $scope (presentes no AngularJS), as aplicações são construídas com componentes reutilizáveis, cada um com sua própria lógica, template (HTML) e estilo (CSS). Isso promove modularidade e facilita a manutenção.

Arquitetura Baseada em Componentes
Um componente é definido por um @Component decorator, que especifica seu seletor, template e estilos.

```Typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Como o componente será usado no HTML
  template: `
    <h1>{{title}}</h1>
    <app-saudacao></app-saudacao> `,
  styles: [`
    h1 {
      color: blue;
    }
  `]
})
export class AppComponent {
  title = 'Minha Primeira Aplicação Angular';
}
```

```Typescript
// saudacao.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-saudacao',
  template: `
    <p>Olá do componente de saudação!</p>
  `
})
export class SaudacaoComponent {}
```


## Data Binding Simplificado e Explícito:

**Property Binding `[ ]`**: Para vincular valores do componente a propriedades de elementos HTML ou outros componentes.

Vinculando uma propriedade de um elemento HTML a uma propriedade do componente.

```Typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <img [src]="imageUrl" alt="Logo Angular" [attr.aria-label]="imageDescription">
    <button [disabled]="isButtonDisabled">Clique-me</button>
  `
})
export class AppComponent {
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  imageDescription = 'Logo oficial do Angular';
  isButtonDisabled = false;
}
```

**Event Binding `( )`**: Para responder a eventos do DOM, chamando métodos do componente.

Respondendo a um evento do DOM e chamando um método do componente.

```Typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="onClickMe()">Clicar</button>
    <p>{{message}}</p>
    <input (keyup)="onKeyUp($event)">
  `
})
export class AppComponent {
  message = '';

  onClickMe() {
    this.message = 'Botão clicado!';
  }

  onKeyUp(event: KeyboardEvent) {
    this.message = 'Você digitou: ' + (event.target as HTMLInputElement).value;
  }
}
```

**Two-way Data Binding [(ngModel)]**: Uma forma de vincular dados em ambas as direções, simplificando a sincronização entre o modelo e a view (substituindo o ng-model do AngularJS).

Para usar [(ngModel)], você precisa importar FormsModule no seu AppModule.

```Typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Adicionar FormsModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```Typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input [(ngModel)]="nomeUsuario" placeholder="Digite seu nome">
    <p>Olá, {{nomeUsuario}}!</p>
  `
})
export class AppComponent {
  nomeUsuario = '';
}
```

## Injeção de Dependência

O Angular 2 possui um sistema de injeção de dependência integrado, que facilita o gerenciamento e a injeção de serviços e outras dependências em componentes e outros serviços, promovendo a modularidade e a testabilidade do código.

Exemplo de como um UserService é injetado em um componente.

```Typescript
// app.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service'; // Importe o serviço
import { User } from './user.interface';

@Component({
  selector: 'app-root',
  template: `
    <h2>Lista de Usuários</h2>
    <ul>
      <li *ngFor="let user of users">
        {{user.name}} ({{user.email || 'N/A'}})
      </li>
    </ul>
  `,
  providers: [UserService] // Opcional, ou forneça no AppModule para uso global
})
export class AppComponent implements OnInit {
  users: User[] = [];

  // O Angular injeta uma instância de UserService no construtor
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
}
```

## Diretivas Estruturais e de Atributo

**Diretivas Estruturais (ex: *ngFor, *ngIf)**: Alteram a estrutura do DOM, adicionando, removendo ou manipulando elementos. O prefixo * indica que são estruturais.

```Typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="toggleShowMessage()">Alternar Mensagem</button>

    <p *ngIf="showMessage">Esta mensagem aparece e desaparece!</p>

    <h2>Frutas Favoritas</h2>
    <ul>
      <li *ngFor="let fruta of frutas; let i = index">
        {{i + 1}}. {{fruta}}
      </li>
    </ul>

    <div *ngIf="frutas.length === 0; else noFruits">
      <p>Nenhuma fruta na lista.</p>
    </div>
    <ng-template #noFruits>
      <p>Existem frutas na lista.</p>
    </ng-template>
  `
})
export class AppComponent {
  showMessage = true;
  frutas = ['Maçã', 'Banana', 'Laranja', 'Uva'];

  toggleShowMessage() {
    this.showMessage = !this.showMessage;
  }
}
```

**Diretivas de Atributo (ex: [ngClass], [ngStyle])**: Alteram a aparência ou o comportamento de um elemento existente.

```Typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p [ngClass]="{'destaque': isHighlighted, 'ativo': isActive}">
      Texto com classes dinâmicas.
    </p>
    <button (click)="toggleHighlight()">Alternar Destaque</button>
    <button (click)="toggleActive()">Alternar Ativo</button>

    <div [ngStyle]="{'background-color': bgColor, 'font-size.px': fontSize}">
      Este texto tem estilos dinâmicos.
    </div>
    <input type="color" [(ngModel)]="bgColor">
    <input type="number" [(ngModel)]="fontSize" placeholder="Tamanho da fonte">
  `,
  styles: [`
    .destaque {
      font-weight: bold;
      color: red;
    }
    .ativo {
      text-decoration: underline;
    }
  `]
})
export class AppComponent {
  isHighlighted = true;
  isActive = false;
  bgColor = '#e0e0e0';
  fontSize = 16;

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }
}
```

**Pipes**: Substituíram os "filtros" do AngularJS para transformar dados antes de exibi-los na interface, como formatação de datas, moedas, etc.

```Typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>Data atual: {{ today | date:'shortDate' }}</p>
    <p>Moeda: {{ price | currency:'BRL':'symbol':'1.2-2' }}</p>
    <p>Texto em maiúsculas: {{ 'Olá Mundo' | uppercase }}</p>
    <p>Número percentual: {{ 0.75 | percent }}</p>
    <p>JSON: {{ data | json }}</p>
  `
})
export class AppComponent {
  today = new Date();
  price = 123.456;
  data = {
    name: 'Exemplo',
    value: 123
  };
}
```

## Sistema de Roteamento

Um módulo de roteamento robusto que permite criar aplicações de página única (SPA) com navegação complexa, definindo rotas e lidando com a navegação entre diferentes views.

```Typescript
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redireciona a rota raiz para /home
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/home' } // Rota curinga para caminhos não encontrados
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

```Typescript
// app.module.ts (Adicione o AppRoutingModule)
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importe o módulo de rotas

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Adicione o módulo de rotas aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```Typescript
// app.component.ts (Exemplo de uso do router-outlet e routerLink)
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a> |
      <a routerLink="/about" routerLinkActive="active">Sobre</a> |
      <a routerLink="/contact" routerLinkActive="active">Contato</a>
    </nav>
    <router-outlet></router-outlet> `,
  styles: [`
    nav a { margin-right: 10px; }
    .active { font-weight: bold; color: blue; }
  `]
})
export class AppComponent { }
```

```Typescript
// home/home.component.ts (Um componente de exemplo para uma rota)
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<h2>Bem-vindo à Página Inicial!</h2>`
})
export class HomeComponent {}
```

## Angular CLI (Command Line Interface)

Embora não seja uma funcionalidade "dentro do código" diretamente, o CLI foi introduzido para agilizar o desenvolvimento, permitindo criar novos projetos, gerar componentes, serviços, módulos, etc., e construir a aplicação com comandos simples.

O CLI é uma ferramenta de linha de comando. Aqui estão os comandos básicos, não o código dentro de um arquivo.

```Bash
# Criar um novo projeto Angular
ng new my-angular-app
```

```Bash
# Gerar um novo componente
ng generate component my-new-component
# ou a forma curta
ng g c my-new-component
```

```Bash
# Gerar um novo serviço
ng generate service my-new-service
# ou a forma curta
ng g s my-new-service
```

```Bash
# Servir a aplicação (rodar em modo de desenvolvimento)
ng serve
```

```Bash
# Construir a aplicação para produção
ng build --prod
```

