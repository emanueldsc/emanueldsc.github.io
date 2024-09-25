---
title: "PHP no Windows: Instale e Rode Seu Hello World Fácil!"
date: "2024-09-15"
summary: "Um guia rápido, e talvez o motivo da sua paixão, por PHP"
thumb: "/images/featured-article.jpg"
author: Emanuel Douglas Sousa Costa
cover: true
---

# PHP 8.3 no Windows: Instalando, Configurando e Fazendo Seu 'Hello World' Brilhar Sem Drama!

Você está pronto para dar seus primeiros passos no glorioso mundo do PHP? Ótimo! Então prepare-se, porque hoje vamos instalar o PHP na sua máquina Windows. E, claro, vou te guiar como se estivesse do seu lado, com o humor e a leveza de quem sabe que a vida de desenvolvedor pode ser tensa, mas não precisa ser chata!

#### 1. **Preparando o terreno: Criando uma pasta especial**
Antes de tudo, vamos organizar o seu ambiente. Nada de deixar os arquivos jogados no *Desktop*, como se fossem o quarto de um adolescente. Crie uma pasta no seu *C:* para manter tudo arrumadinho. Abra o *Explorador de Arquivos* e vá até o glorioso diretório `C:`.

**Crie uma pasta chamada:**
```
C:\php
```
Sinta-se à vontade para dar um nome mais criativo se quiser, mas vou me referir a ela como `C:\PHP` para não deixar você perdido no meio do caminho, igual quando você esquece onde salvou aquele importante arquivo do trabalho...

#### 2. **Baixando o PHP (não é um filme de ação, mas tá quase)**

Agora vamos baixar o PHP como se fosse a última temporada de sua série favorita. Entre no site oficial:

- Acesse: [https://windows.php.net/download](https://windows.php.net/download)

Procure pela versão **8.3 ou posterior**, especificamente o pacote com **ZIP** para *Thread Safe*. Porque... quem quer um PHP estressado, certo?

Baixe o pacote, descompacte-o e jogue todo o conteúdo dessa belezura dentro daquela pastinha que criamos em `C:\PHP`.

#### 3. **Configurando as variáveis de ambiente (ou como ensinar seu Windows a falar PHP)**

Agora vem a parte onde ensinamos ao Windows que ele precisa encontrar o PHP no meio dos seus cliques. Abra o **Painel de Controle** e siga o caminho:

```
Sistema > Configurações avançadas do sistema > Variáveis de Ambiente
```

Lá embaixo, onde está escrito **Variáveis do Sistema**, procure a variável chamada `Path` como se fosse o Wally em "Onde Está o Wally?". Clique em **Editar** e, na lista que vai aparecer, adicione a seguinte entrada:

```
C:\php
```

Isso vai permitir que o PHP seja acessado de qualquer lugar do seu sistema, como um chefão que entra pela porta da frente em qualquer evento VIP.

**Dica extra:** Se estiver usando PHP com extensões, talvez você precise habilitar algumas delas no arquivo `php.ini`. Ele está dentro daquela sua pasta `C:\PHP`. Copie o `php.ini-development` e renomeie para `php.ini`. Depois, edite-o (abra no seu editor favorito, nada de usar o Bloco de Notas, ok?) e ative o que precisar, removendo o ponto e vírgula `;` dos itens que desejar.

#### 4. **Testando a instalação (é hora do show, bebê)**

Agora que o PHP está configurado, chegou a hora de testar. Abra o *Prompt de Comando* (aquele clássico `cmd`, onde desenvolvedores jogam código como em um game retrô) e digite:

```
php -v
```

Se tudo correu bem, o PHP vai responder com a sua versão orgulhosamente. Se não aparecer nada, respire fundo e verifique se você adicionou `C:\PHP` corretamente nas variáveis de ambiente.

#### 5. **Criando seu primeiro script PHP (o glorioso "Hello World")**

Agora, vamos criar uma aplicação PHP! Crie um arquivo chamado `index.php` dentro de qualquer pasta que quiser. Para manter as coisas simples, crie uma pasta chamada `meu-projeto` em `C:\`, e dentro dela crie o arquivo `index.php`:

```
C:\meu-projeto\index.php
```

Dentro do `index.php`, adicione o seguinte código:

```php
<?php
echo "Hello, World!";
```

É só isso! Eu sei, parece até anti-climático, mas todos os grandes começos são assim.

#### 6. **Subindo o servidor embutido do PHP (sem complicações!)**

Agora, o momento mais esperado: vamos subir seu servidor local usando o servidor embutido do PHP. O que é melhor que rodar um servidor local com apenas um comando? Não, sério... tem coisa melhor?

Abra o *Prompt de Comando* (ou Powershell, se você gosta de emoções) e vá até a pasta onde você criou seu projeto:

```
cd C:\meu-projeto
```

Agora digite o comando mágico:

```
php -S localhost:8000
```

Pronto! Agora você tem um servidor PHP rodando na sua máquina. Basta abrir o navegador e acessar [http://localhost:8000](http://localhost:8000). Se tudo deu certo, você verá um glorioso **"Hello, World!"** na tela.

#### 7. **Celebrando como um Dev Profissa**

Agora que você instalou o PHP 8.3 ou posterior no Windows, configurou variáveis de ambiente, criou um "Hello World" e subiu um servidor, é hora de comemorar. Tome um café, estique as pernas e aprecie o poder que agora você tem em suas mãos.

Se quiser, você pode até compartilhar esse post com seus amigos e deixar todo mundo morrendo de inveja do seu ambiente de desenvolvimento impecável. Ah, e não esqueça de atualizar aquele "README" com algo como: **"This machine runs on PHP magic."**

Com isso, você está oficialmente pronto para dominar o PHP!

