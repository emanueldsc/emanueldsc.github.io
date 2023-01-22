---
title: Diretivas Estruturais Customizadas
slug: diretivas-estruturais-customizadas
featureImage: assets/images/diretivas-estruturais-customizadas/cover.png
date: 22/01/2023
---

# Diretiva Estrutural

Para criar uma diretiva estrutural personalizada no Angular, você precisará seguir os seguintes passos:

1. Crie uma classe para a sua diretiva: comece criando uma classe para a sua diretiva e marcando-a com o decorador @Directive.
2. Defina o seletor para a sua diretiva: defina o seletor para a sua diretiva, o nome da diretiva que será usado no HTML. Adicione o prefixo "*" para indicar que é uma diretiva estrutural.
3. Implemente o seu código de manipulação de DOM: Implemente o seu código de manipulação de DOM usando a classe "TemplateRef" e "ViewContainerRef" do Angular. Essas classes permitem que você acesse e manipule os elementos do DOM.
4. Registre a diretiva: Finalmente, registre a sua diretiva no módulo do seu aplicativo, adicionando-a à array "declarations" no decorador @NgModule.

Aqui está um exemplo básico de como criar uma diretiva estrutural personalizada "myStructuralDirective"

```ts
import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyStructuralDirective]'
})
export class MyStructuralDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
  ngOnInit() {
    this.viewContainer.createEmbeddedView(this.templateRef);
  }
}
```

```html
<div *appMyStructuralDirective>
  <p>Conteúdo visível</p>
</div>
```

Aqui está mais um exemplo de uma diretiva estrutural personalizada chamada "myRepeat" que permite iterar sobre uma coleção de dados e exibir cada item usando um template personalizado:

```ts
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyRepeat]'
})
export class MyRepeatDirective {
  @Input() set appMyRepeat(items: any[]) {
    this.viewContainer.clear();
    for (const item of items) {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: item
      });
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
```

```html
<ng-template appMyRepeat let-item [appMyRepeat]="items">
  <p>{{item}}</p>
</ng-template>
```

Neste exemplo, a diretiva "appMyRepeat" é usada para iterar sobre uma coleção de dados e exibir cada item usando um template personalizado. O template personalizado pode ser definido dentro da diretiva, como no exemplo acima. Utilizamos o decorador @Input para definir a entrada e o método "clear" e "createEmbeddedView" para manipular a estrutura do DOM.

É importante mencionar que essa é uma implementação simples e pode não ser a melhor opção para todos os casos, dependendo da complexidade de seu projeto. Dependendo do seu caso, é recomendável verificar as outras opções de diretivas estruturais que o Angular oferece, como ngFor e ngIf, e verificar se elas atendem as suas necessidades antes de criar uma diretiva personalizada.

E aqui segue mais um exemplo de uma diretiva estrutural personalizada chamada "myIf" que permite mostrar ou ocultar um elemento baseado em uma condição:

```ts
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {
  private hasView = false;

  @Input() set appMyIf(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    } else if (condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}

```

```html
<div *appMyIf="condition">
  <p>Conteúdo visível</p>
</div>
```

Neste exemplo, a diretiva "appMyIf" é usada para mostrar ou ocultar o elemento <div> baseado na condição "condition". Se a condição for verdadeira, o elemento <div> será exibido, se for falsa, ele será oculto. Utilizamos

Para reforçar aqui mais um exemplo de uma diretiva estrutural personalizada chamada "toggle" que permite alternar a visibilidade de um elemento com base em uma condição:

```ts
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appToggle]'
})
export class ToggleDirective {
  @Input() set appToggle(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
```

```html
<div *appToggle="condition">
  <p>Conteúdo visível</p>
</div>
```

Neste exemplo, a diretiva "appToggle" é usada para alternar a visibilidade de um elemento com base em uma condição. Se a condição for verdadeira, o elemento é exibido, caso contrário, o elemento é ocultado. Utilizamos o decorador @Input para definir a entrada e o método "clear" e "createEmbeddedView" para manipular a estrutura do DOM.

Lembre-se de adicionar a diretiva "appToggle" no módulo do seu aplicativo para que ela possa ser usada. Além disso, é importante notar que a diretiva "appToggle" é dependente de uma variável "condition" para funcionar, essa variável deve ser definida no componente correspondente, para que a diretiva possa usá-la como entrada.

Espero que esses exemplos ajudem a entender como criar diretivas estruturais personalizadas no Angular e como elas podem ser usadas para modificar a estrutura do DOM de acordo com as necessidades do seu aplicativo. Como sempre, é importante considerar a complexidade do seu projeto antes de escolher qual diretiva estrutural usar.