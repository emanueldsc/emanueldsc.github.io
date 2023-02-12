---
title: Simples Abordagem sobre NgTemplate
slug: simples-abordagem-sobre-ngtemplate
featureImage: assets/images/simples-abordagem-sobre-ngtemplate/cover.png
date: 11/02/2023
---

# Simples abordagem sobre Templates

O Angular utiliza templates para renderizar componentes dinamicamente. Um template é uma representação visual do componente, que pode conter HTML, diretivas, propriedades de componentes, expressões e muito mais.

Existem duas formas de escrever templates no Angular: com o uso de asterisco (*) e sem asterisco.

Templates com asterisco (*):

O asterisco antes da diretiva ngFor, por exemplo, indica que você está utilizando um template estendido, que permite escrever vários elementos HTML dentro de um elemento. A sintaxe para usar templates estendidos é a seguinte:

```html
<ng-container *ngFor="let item of items">
  <p>{{item}}</p>
</ng-container>
```

Templates sem asterisco:

Quando você não usa o asterisco, o template é escrito dentro do elemento HTML com a diretiva ngFor:

```html
<ng-container ngFor="let item of items">
  <p>{{item}}</p>
</ng-container>
```

Ambas as formas são válidas e são usadas dependendo da necessidade e da preferência do desenvolvedor. É importante ter em mente que o uso de templates estendidos pode tornar seu código mais legível e fácil de manter, enquanto o uso de templates inline pode ser mais fácil de ler e entender para desenvolvedores iniciantes.

# Como usar NgTemplate?

A diretiva ngTemplate é usada para definir um template em seu código. Um template é uma representação visual de uma parte de sua aplicação e pode ser reutilizado em vários lugares.

Aqui está uma explicação de como usar a diretiva ngTemplate:

1. Primeiro, você precisa criar um template dentro de seu código:

```html
<ng-template #templateA>
  <p>Este é o template A</p>
</ng-template>
```

Em seguida, você pode usar o template em diferentes lugares em seu aplicativo, como por exemplo, com a diretiva ngIf:

```html
<ng-container *ngIf="showTemplateA; else templateB">
  <ng-container *ngTemplateOutlet="templateA"></ng-container>
</ng-container>

<ng-template #templateB>
  <p>Este é o template B</p>
</ng-template>
```

No exemplo acima, estamos usando a diretiva ngIf para controlar a exibição do template A ou B, dependendo do valor da variável "showTemplateA". Se "showTemplateA" for verdadeiro, o template A será exibido; caso contrário, o template B será exibido.

A diretiva ngTemplate é muito útil para criar templates reutilizáveis e para controlar a exibição de conteúdo em seu aplicativo de forma dinâmica.

Segue aqui estão mais alguns exemplos de como usar a diretiva ngTemplate:

## Usando ngFor:

```html
<ng-template ngFor let-item [ngForOf]="items">
  <p>{{item}}</p>
</ng-template>
```
No exemplo acima, estamos usando a diretiva ngFor para iterar sobre um array "items" e exibir cada item em uma nova linha.

## Usando ngSwitch:

```html
<ng-template [ngClass]="{'highlight': isHighlighted}">
  <p>Este texto pode ser destacado</p>
</ng-template>
```

No exemplo acima, estamos usando a diretiva ngClass para aplicar uma classe CSS "highlight" ao elemento, dependendo do valor da variável "isHighlighted".

Você pode combinar a diretiva ngTemplate com outras diretivas e componentes para criar soluções de interface do usuário dinâmicas e flexíveis.

## Com encadeamento de templates

Você pode usar ngTemplate dentro de outro ngTemplate. Aqui está um exemplo:

```html
<ng-template #templateA>
  <p>Este é o template A</p>
  <ng-template #templateB>
    <p>Este é o template B dentro de A</p>
  </ng-template>
</ng-template>

<ng-container *ngTemplateOutlet="templateA"></ng-container>
<ng-container *ngTemplateOutlet="templateA.templateB"></ng-container>
```

No exemplo acima, estamos criando dois templates: o template A e o template B. O template B é definido dentro do template A. Em seguida, estamos usando a diretiva ngTemplateOutlet para exibir ambos os templates, primeiro o template A e, em seguida, o template B.

Isso é útil quando você precisa criar um template mais complexo com várias partes e precisa reutilizar essas partes em diferentes lugares em seu aplicativo. Você pode criar templates aninhados para organizar seu código e melhorar a reutilização de código.

# Uma explicação mais aprofundada sobre NgTemplateOutlet

A diretiva ngTemplateOutlet é usada para exibir um template em um local específico no seu aplicativo. Aqui está um exemplo de uso:

```html
<ng-template #templateA>
  <p>Este é o template A</p>
</ng-template>

<ng-container *ngTemplateOutlet="templateA"></ng-container>
```

No exemplo acima, estamos criando um template com a diretiva ngTemplate e atribuindo-o a uma variável #templateA. Em seguida, estamos usando a diretiva ngTemplateOutlet para exibir o template em um local específico em nosso aplicativo, no caso, dentro de um ng-container.

Você pode usar ngTemplateOutlet para exibir um template dinamicamente, dependendo de alguma condição ou variável em seu aplicativo. Por exemplo:

```html
<ng-template #templateA>
  <p>Este é o template A</p>
</ng-template>

<ng-template #templateB>
  <p>Este é o template B</p>
</ng-template>

<ng-container *ngTemplateOutlet="showTemplateA ? templateA : templateB"></ng-container>
```

No exemplo acima, estamos criando dois templates, templateA e templateB. Em seguida, estamos usando a diretiva ngTemplateOutlet para exibir um dos templates, dependendo do valor da variável "showTemplateA". Se "showTemplateA" for verdadeiro, o template A será exibido; caso contrário, o template B será exibido.

A diretiva ngTemplateOutlet é uma forma flexível e dinâmica de exibir templates em seu aplicativo Angular.

# Passando template para Modal 

Por ultímo vamos a um exemplo de como passar um template para um component de modal

Aqui está o exemplo de como passar um template para uma modal através de um serviço:


```typescript
// modal.service.ts
import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalContent: TemplateRef<any>;
  private modalVisible = false;

  openModal(content: TemplateRef<any>) {
    this.modalContent = content;
    this.modalVisible = true;
  }

  closeModal() {
    this.modalContent = null;
    this.modalVisible = false;
  }

  getModalContent() {
    return this.modalContent;
  }

  isModalVisible() {
    return this.modalVisible;
  }
}
```

```typescript
// component.ts
import { Component, TemplateRef } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-component',
  template: `
    <ng-template #modalContent>
      <p>Este é o conteúdo da modal</p>
      <button (click)="closeModal()">Fechar</button>
    </ng-template>

    <button (click)="openModal(modalContent)">Abrir modal</button>

    <ng-template #modalContainer>
      <div class="modal-overlay" *ngIf="modalService.isModalVisible()">
        <div class="modal-content">
          <ng-container *ngTemplateOutlet="modalService.getModalContent()"></ng-container>
        </div>
      </div>
    </ng-template>

    <ng-container *ngTemplateOutlet="modalContainer"></ng-container>
  `
})
export class AppComponent {
  constructor(private modalService: ModalService) {}

  openModal(content: TemplateRef<any>) {
    this.modalService.openModal(content);
  }

  closeModal() {
    this.modalService.closeModal();
  }
}
```

No exemplo acima, estamos criando um serviço ModalService que gerencia o conteúdo e a visibilidade da modal. O componente principal usa esse serviço para abrir e fechar a modal, e também para exibir o conteúdo da modal no template. Quando o botão "Abrir modal" é clicado, a função "openModal" é chamada para passar o template de conteúdo da modal para o serviço, e a função "closeModal" é chamada para fechar a modal.

Este é apenas um exemplo básico para ilustrar como passar um template para uma modal através de um serviço em Angular. Dependendo da complexidade de sua modal, você.