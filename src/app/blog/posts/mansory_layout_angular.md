---
title: "Criando um Layout Masonry com Angular"
date: "11/11/2024"
summary: "Mosaico perfeito aos seus olhos com mansory layout."
thumb: "/images/mansory.jpg"
cover: true
---

![Criando um Layout Masonry com Angular](/images/mansory.jpg "Criando um Layout Masonry com Angular")

# Criando um Layout Masonry com Angular

Imagine-se folheando uma revista, repleta de imagens que parecem se organizar magicamente, criando um mosaico perfeito aos seus olhos. É isso que vamos alcançar aqui: um layout **masonry** em Angular. Vamos aprender a alinhar, sobrepor e construir um visual fluido e atrativo, que adapta o espaço dinamicamente, criando aquele efeito visual semelhante a uma parede de tijolos — com cada bloco encaixado perfeitamente.

### Passo 1: Estrutura do Componente Angular

Vamos começar definindo a estrutura do nosso componente. Ele será o coração da nossa construção — organizando cada item como um tijolo no nosso mosaico dinâmico.

No HTML do `MasonryComponent`, utilizamos a diretiva `@For` para renderizar cada bloco da nossa lista `mansoryBlocks`:

```html
<div class="masonry-grid">
    @for (mansoryBlock of mansoryBlocks; trackBy: $index) {
        <div class="masonry-item"
            [style.gridColumn]="mansoryBlock.gridColumn"
            [style.gridRow]="mansoryBlock.gridRow">
            <div>item {{$index}}</div>
        </div>
    }
</div>
```

Aqui, cada item do layout **masonry** é renderizado com base nas propriedades `gridColumn` e `gridRow`. Essas propriedades definem como o item deve se comportar na grade, proporcionando aquele visual que tanto nos agrada, onde tamanhos variados se encaixam organicamente.

### Passo 2: Criando o Estilo com SASS

No próximo passo, o **SASS** entra em cena. O **SASS** de verdade, identado e não aquilo que chamam de **SASS** mas que termina com extensão `*.scss`. Pense no SASS como o arquiteto da nossa estrutura, dando as especificações exatas para que cada bloco tenha seu lugar, mantendo a harmonia e o espaço bem distribuído.

```sass
.masonry-grid
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))
  grid-auto-rows: 10px
  gap: 10px

.masonry-item
  // Define o span de coluna e linha dinamicamente
  @each $size in 1 2 3 4
    &.col-#{$size}
      grid-column: span $size
    &.row-#{$size}
      grid-row: span $size
```

Vamos entender o que cada linha aqui faz:

1. **grid-template-columns**: Este é o responsável por definir as colunas da nossa grade. Usamos `repeat(auto-fill, minmax(250px, 1fr))` para permitir que as colunas se adaptem automaticamente ao espaço disponível. O `minmax(250px, 1fr)` define que cada coluna deve ter no mínimo `250px` e crescer conforme o espaço permitido.

2. **grid-auto-rows**: Define a altura base de cada linha como `10px`. Isso nos permite controlar a altura de cada item na grade, tornando possível que ocupem múltiplas linhas conforme especificado no `grid-row`.

3. **gap**: Esta propriedade define o espaçamento entre os itens da grade — tão importante quanto o espaço entre tijolos em uma construção. Aqui, `10px` cria espaços uniformes que tornam o layout mais legível e organizado.

4. **Classes Dinâmicas para Colunas e Linhas**: Com `@each`, criamos classes como `.col-1`, `.col-2`, etc., para definir dinamicamente o tamanho de cada item. Isso nos permite brincar com o layout, dando às colunas e linhas diferentes espaços de acordo com o conteúdo de cada bloco.

### Passo 3: Controle no Componente Angular

No nosso componente TypeScript, precisamos garantir que cada bloco receba a classe correta para definir sua posição. Veja o código abaixo:

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  styleUrls: ['./masonry.component.sass']
})
export class MansoryComponent {
  @Input() mansoryBlocks: Array<{ gridColumn: string, gridRow: string, card: any }>;

  trackByFn(index: number, item: any): number {
    return index;
  }
}
```

A propriedade `mansoryBlocks` recebe uma lista de objetos, onde cada um contém valores para `gridColumn` e `gridRow`, além dos dados do card. Esses valores são utilizados diretamente no template para posicionar cada item no layout de forma adequada.

### Conclusão

Com estas ferramentas em mãos — Angular, SASS e um pouco de criatividade — conseguimos montar um layout **masonry** responsivo e visualmente atraente. Assim como uma parede de tijolos bem assentada, cada bloco se encaixa com precisão, transformando o conjunto em algo maior do que a soma de suas partes.

Pronto para erguer seu próximo mosaico visual? É só colocar a mão na massa e ver a magia do **masonry** acontecer!



