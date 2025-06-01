---
title: "Angular 4 - Features"
summary: "Features e funcionalidades adicionadas no Angular 4"
date: "01/06/2025"
thumb: "/images/angular4.jpg"
---

| Sumário |         |         |         |         |
| ------ | ------ | ------ | ------ | ------ |
| [Angular 2](../angular-timeline) | [Angular 4](#) | [Angular 5](#introdução) | [Angular 6](#introdução) | [Angular 7](#introdução) |
| [Angular 8](#introdução) | [Angular 9](#introdução) | [Angular 10](#introdução) | [Angular 11](#introdução) | [Angular 12](#introdução) |
| [Angular 13](#introdução) | [Angular 14](#introdução) | [Angular 15](#introdução) | [Angular 16](#introdução) | [Angular 17](#introdução) |
| [Angular 18](#introdução) | [Angular 19](#introdução) | [Angular 20](#introdução) |         |         |

![Angular 4 - Features](/images/angular4.jpg "Angular 4 - Features")

# A Versão 4

A Versão 4 do Angular (foi pulada a versão 3 para evitar confusão com o roteador que já estava na versão 3) trouxe algumas funcionalidades práticas importantes que influenciaram a forma de escrever código.

---

### **1. `*ngIf else` e `as` syntax**

Esta funcionalidade melhorou a maneira de lidar com lógica condicional e a passagem de dados para templates.

#### **a. `else` no `*ngIf`**

Permite renderizar um bloco de template alternativo quando a condição do `*ngIf` é falsa.

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="toggleLoggedIn()">{{ isLoggedIn ? 'Logout' : 'Login' }}</button>

    <div *ngIf="isLoggedIn; else loggedOutContent">
      <p>Bem-vindo, usuário logado!</p>
    </div>

    <ng-template #loggedOutContent>
      <p>Por favor, faça o login para continuar.</p>
    </ng-template>
  `
})
export class AppComponent {
  isLoggedIn = false;

  toggleLoggedIn() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
```

#### **b. `as` syntax**

Permite capturar o valor de uma expressão (como o resultado de uma pipe assíncrona ou de uma Observable) em uma variável local do template, tornando-o mais fácil de usar e mais legível.

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs'; // Importar Observable e of para o exemplo

@Component({
  selector: 'app-root',
  template: `
    <h2>Dados do Usuário (async)</h2>
    <div *ngIf="userData$ | async as user">
      <p>Nome: {{ user.name }}</p>
      <p>Idade: {{ user.age }}</p>
    </div>
    <div *ngIf="(userData$ | async) === null">
      <p>Carregando dados do usuário...</p>
    </div>

    <h2>Itens da Lista (ngFor e as)</h2>
    <ul>
      <li *ngFor="let item of items; index as i; first as isFirst; last as isLast">
        {{i + 1}}. {{item}}
        <span *ngIf="isFirst"> (Primeiro)</span>
        <span *ngIf="isLast"> (Último)</span>
      </li>
    </ul>
  `
})
export class AppComponent {
  // Exemplo de Observable para simular uma chamada assíncrona
  userData$: Observable<{ name: string, age: number } | null> = of({ name: 'Alice', age: 30 }); // Simula dados carregados

  items = ['Item A', 'Item B', 'Item C'];

  constructor() {
    // Para testar o estado de carregamento
    // setTimeout(() => this.userData$ = of(null), 1000);
    // setTimeout(() => this.userData$ = of({ name: 'Alice', age: 30 }), 3000);
  }
}
```

---

### **2. Pipes `titlecase` e `currency` (melhorias)**

#### **a. `titlecase` pipe**

Um pipe útil para formatar strings.

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>Frase Original: {{ sentence }}</p>
    <p>Frase em Title Case: {{ sentence | titlecase }}</p>

    <p>Nome Completo: {{ fullName | titlecase }}</p>
  `
})
export class AppComponent {
  sentence = 'o angular é uma plataforma incrível para desenvolvimento web.';
  fullName = 'joão da silva';
}
```

#### **b. `currency` pipe com código de moeda**

Permite especificar o código da moeda para formatação mais precisa.

```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>Preço (Padrão USD): {{ productPrice | currency }}</p>
    <p>Preço (BRL - símbolo): {{ productPrice | currency:'BRL':'symbol':'1.2-2' }}</p>
    <p>Preço (EUR - código): {{ productPrice | currency:'EUR':'code':'1.2-2' }}</p>
    <p>Preço (JPY - nenhum símbolo): {{ productPrice | currency:'JPY':'':'' }}</p>
  `
})
export class AppComponent {
  productPrice = 1234.56;
}
```

---

### **3. `ParamMap` no Router**

O `ParamMap` fornece uma forma mais segura e imutável de acessar parâmetros de rota e query parameters. Para isso, precisamos de um serviço de rotas configurado.

```typescript
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: 'product/:id', component: ProductDetailComponent },
  { path: '', redirectTo: '/product/1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

```typescript
// app.module.ts (Certifique-se de importar e declarar o componente)
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```typescript
// product-detail/product-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators'; // Importar switchMap

@Component({
  selector: 'app-product-detail',
  template: `
    <h2>Detalhes do Produto</h2>
    <p *ngIf="productId">ID do Produto: {{ productId }}</p>
    <p *ngIf="category">Categoria: {{ category }}</p>
    <p *ngIf="sortOrder">Ordem de Classificação: {{ sortOrder }}</p>
    <button (click)="goToNextProduct()">Próximo Produto</button>
  `
})
export class ProductDetailComponent implements OnInit {
  productId: string | null = null;
  category: string | null = null;
  sortOrder: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Usando ParamMap para acessar parâmetros de rota
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.productId = params.get('id'); // 'id' é o nome do parâmetro na rota
    });

    // Usando ParamMap para acessar query parameters
    this.route.queryParamMap.subscribe((params: ParamMap) => {
      this.category = params.get('category');
      this.sortOrder = params.get('sort');
    });

    // Forma mais reativa e comum com switchMap (útil para chamadas de API)
    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => {
    //     this.productId = params.get('id');
    //     // Poderia fazer uma chamada de serviço aqui para buscar detalhes do produto
    //     return of('Produto carregado: ' + this.productId);
    //   })
    // ).subscribe(message => console.log(message));
  }

  goToNextProduct() {
    // Exemplo de navegação para um produto com ID incrementado e query params
    const nextId = this.productId ? parseInt(this.productId) + 1 : 1;
    this.route.navigate(['/product', nextId], {
      queryParams: { category: 'electronics', sort: 'asc' }
    });
  }
}
```

```typescript
// app.component.ts (Para navegar para o componente ProductDetailComponent)
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Exemplo de Roteamento Angular 4</h1>
    <nav>
      <a [routerLink]="['/product', 1]" [queryParams]="{category: 'books', sort: 'desc'}">Produto 1 (Livros)</a> |
      <a [routerLink]="['/product', 2]" [queryParams]="{category: 'clothes'}">Produto 2 (Roupas)</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
```
