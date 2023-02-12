---
title: Compartilhando css, scss ou sass entre várias bibliotecas
slug: compartilhando-css-scss-ou-sass-entre-várias-bibliotecas
featureImage: assets/images/compartilhando-css-scss-ou-sass-entre-várias-bibliotecas/cover.jpeg
date: 12/02/2023
---

Para compartilhar arquivos de Sass entre várias bibliotecas Angular usando o módulo "Sass Library" (também conhecido como "Shared Sass"). Aqui estão os passos para fazê-lo:

Segue os passos.

1. Crie um novo módulo de biblioteca Sass:

```shell
ng generate module shared-sass --module=app.module
```

2. Mova seus arquivos Sass compartilhados para a pasta "src/lib/shared-sass".

3. Adicione uma importação Sass para o seu arquivo "src/styles.scss":

```scss
@import '~shared-sass/shared-sass';
```

4. Adicione a seguinte configuração ao seu arquivo "angular.json":

```json
"projects": {
    "my-app": {
      "architect": {
        "build": {
          "options": {
            "stylePreprocessorOptions": {
              "includePaths": [
                "src/lib/shared-sass"
              ]
            }
          }
        }
      }
    }
}
```

5. Importe o módulo "Shared Sass" nas bibliotecas que precisam acessar o código Sass compartilhado.

Agora, você pode usar as variáveis, mixins e outros elementos Sass compartilhados em todas as bibliotecas que importam o módulo "Shared Sass". Quando você precisar atualizar o código Sass compartilhado, basta fazê-lo no módulo "Shared Sass" e as alterações serão automaticamente refletidas em todas as bibliotecas que importam o módulo.
