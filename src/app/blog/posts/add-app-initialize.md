---
title: "Angular - Não Comece a Festa Sem a Configuração!"
summary: "Método simples de implementar navegação com Jetpack Compose"
date: "25/05/2025"
thumb: "/images/angularinitialize.png"
---

![Angular - Não Comece a Festa Sem a Configuração](/images/angularinitialize.png "Angular - Não Comece a Festa Sem a Configuração")

# Não Comece a Festa Sem a Configuração!

Já se pegaram na situação de precisar de uma informação crucial antes que a sua aplicação Angular sequer pensasse em dar o ar da graça? Tipo, você precisa saber o endereço da festa (a BASE_URL da sua API) antes de convidar todo mundo pra dançar? Se sim, prepare-se, porque hoje vamos desvendar um segredo poderoso do Angular: o APP_INITIALIZER e como ele, junto com o appConfig e uns Providers espertos, garante que sua festa só comece quando tudo estiver no lugar!

## O Dilema da BASE_URL: Por Que Não Posso Simplesmente Pegar Depois?

Imagine que você está construindo uma casa. Você não começaria a levantar paredes e colocar telhados sem antes saber onde fica o terreno, certo? E se o terreno for definido por um mapa que você precisa buscar em outro lugar?

No mundo do Angular, a BASE_URL é como esse terreno. Muitas vezes, ela não é fixa. Ela pode vir de um serviço de configuração, de uma API específica, ou até mesmo ser diferente em ambientes de desenvolvimento, teste e produção.

Se você tentar fazer uma requisição HTTP para buscar essa BASE_URL dentro de um componente, por exemplo, o que acontece? A aplicação já está de pé, talvez até tentando carregar dados, mas... ops! Ela não sabe pra onde mandar as requisições porque a BASE_URL ainda não chegou! É como tentar construir a casa sem o terreno: caos total!

Precisamos de um jeito de "pausar" a inicialização da aplicação, buscar essa informação vital, e só depois que ela estiver em mãos, liberar a festa!

## Nosso Herói Entra em Cena: O APP_INITIALIZER!

Conheçam o APP_INITIALIZER! Pense nele como o "Bouncer da Festa". Antes de qualquer convidado (componente) entrar, o Bouncer tem uma lista de coisas a verificar. Se algo não estiver certo, a festa não começa!

O APP_INITIALIZER permite que você registre uma ou mais funções que serão executadas antes que o Angular finalize o bootstrap da sua aplicação. E o melhor: se essas funções retornarem uma Promise (ou um Observable que se resolve em uma Promise), o Angular esperará que essa Promise seja resolvida antes de seguir em frente. É tipo o Bouncer esperando a confirmação de que o nome do convidado está na lista VIP!

## Passo 1: O "Balcão de Informações" - Nosso ConfigService

Primeiro, precisamos de um serviço que seja o nosso "balcão de informações". Ele será responsável por ir até a "API de Configuração" e trazer a BASE_URL.

```typescript
// src/app/core/services/config.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, tap } from 'rxjs'; // firstValueFrom para converter Observable em Promise

// Definimos o formato da nossa configuração
interface AppConfig {
  baseUrl: string;
  // Poderíamos ter outras configurações aqui!
}

@Injectable({
  providedIn: 'root' // Disponível em toda a aplicação
})
export class ConfigService {
  private _appConfig: AppConfig | null = null; // Onde guardaremos a configuração

  constructor(private http: HttpClient) { } // Precisamos do HttpClient para fazer a requisição

  // Este método vai buscar a configuração da API
  async loadConfig(): Promise<void> {
    console.log('Bouncer: "Ok, vou buscar as informações da BASE_URL..."');
    try {
      // Simulamos uma chamada HTTP para /api/app-config
      // firstValueFrom converte o Observable em uma Promise, que o APP_INITIALIZER vai esperar!
      this._appConfig = await firstValueFrom(
        this.http.get<AppConfig>('/api/app-config').pipe(
          tap(config => console.log('Bouncer: "Informações da BASE_URL recebidas! ✅"', config))
        )
      );
    } catch (error) {
      console.error('Bouncer: "Houston, temos um problema! Erro ao buscar a BASE_URL! ❌"', error);
      // Se der erro, a festa não pode começar! Você pode relançar o erro ou lidar com ele.
      // throw error;
    }
  }

  // Getter para acessar a BASE_URL em qualquer lugar da aplicação
  get baseUrl(): string {
    if (!this._appConfig) {
      // Se alguém tentar pegar a BASE_URL antes dela ser carregada, lançamos um erro!
      throw new Error('BASE_URL ainda não carregada! O Bouncer não terminou o trabalho!');
    }
    return this._appConfig.baseUrl;
  }
}
```

## Passo 2: As "Instruções Oficiais do Bouncer" - initializeAppConfigFactory

O APP_INITIALIZER não chama seu serviço diretamente. Ele precisa de uma função que diga como obter o que ele precisa. Essa é a nossa função "factory".

```typescript
// src/app/core/providers/app-config.provider.ts
import { APP_INITIALIZER, EnvironmentProviders, inject, Provider } from '@angular/core';
import { ConfigService } from '../services/config.service';

// Esta é a função que o APP_INITIALIZER vai usar.
// Ela injeta o ConfigService e retorna uma função que chama o loadConfig()
function initializeAppConfigFactory(): () => Promise<void> {
  const configService = inject(ConfigService); // Injeta o nosso ConfigService
  return () => configService.loadConfig(); // Retorna a função que o Bouncer vai executar!
}

/**
 * Esta é a nossa "função helper" que encapsula a configuração do APP_INITIALIZER.
 * Ela será usada no app.config.ts como um provider normal.
 */
export function provideAppConfig(): Provider | EnvironmentProviders {
  return {
    provide: APP_INITIALIZER, // Dizemos que é um inicializador de app
    useFactory: initializeAppConfigFactory, // Usamos nossa função factory
    deps: [ConfigService], // Dizemos quais dependências a factory precisa (o ConfigService)
    multi: true // Importante! Permite múltiplos APP_INITIALIZER
  };
}
```

## Passo 3: A "Lista de Convidados da Festa" - app.config.ts

Agora, a mágica acontece no seu app.config.ts. É aqui que você diz ao Angular: "Ei, antes de tudo, use este APP_INITIALIZER para garantir que a BASE_URL esteja pronta!"

Perceba como a função provideAppConfig() se encaixa perfeitamente ao lado de provideRouter(), provideClientHydration(), etc. É exatamente o que você queria!

```typescript
// src/app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { configThemeinitializerProvider } from 'initializers/theme-initializer';
import { routes } from './app.routes';
import { provideAppConfig } from './core/providers/app-config.provider'; // Importamos nossa nova função!

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    configThemeinitializerProvider,
    provideAppConfig() // E aqui está ela! Chamada como uma função normal!
  ],
};
```

## Passo 4: O "Anfitrião Feliz" - AppComponent

Para provar que tudo funcionou, vamos usar a BASE_URL no AppComponent.

```typescript
// src/app/app.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { MainComponent } from './layout/main/main.component';
import { ThemeToggleComponent } from './shared/components/theme-toggle/theme-toggle.component';
import { ConfigService } from './core/services/config.service'; // Importamos o serviço

const COMPONENTS = [
  ThemeToggleComponent,
  MainComponent
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...COMPONENTS],
  template: `
    <div class="relative min-h-screen w-full">
      <app-theme-toggle />
      <app-main />
      <p>A festa começou! Minha BASE_URL é: <strong>{{ configService.baseUrl }}</strong></p>
    </div>
  `,
  styles: ``,
})
export class AppComponent implements OnInit {
  configService = inject(ConfigService); // Injetamos o ConfigService

  ngOnInit(): void {
    // Quando este componente é inicializado, a BASE_URL JÁ ESTÁ DISPONÍVEL!
    console.log('AppComponent: "A festa começou! Usando BASE_URL:', this.configService.baseUrl);
  }
}
```

## Como a Festa Acontece (O Fluxo de Execução)!

1. bootstrapApplication(AppComponent, appConfig): Você diz ao Angular para iniciar sua aplicação.
2. O Bouncer Entra em Ação: O Angular olha para o appConfig e vê que há um APP_INITIALIZER (o provideAppConfig()).
3. A Missão do Bouncer: O Angular chama a initializeAppConfigFactory, que por sua vez, retorna a função () => configService.loadConfig().
4. A Espera da Promise: O Angular executa configService.loadConfig(). Como loadConfig() retorna uma Promise (porque usa await e firstValueFrom), o Angular PAUSA a inicialização da aplicação.
5. A BASE_URL Chega!: A requisição HTTP para /api/app-config é feita. Quando a resposta chega, a Promise é resolvida, e a BASE_URL é armazenada no ConfigService.
6. Festa Liberada!: O Angular percebe que a Promise foi resolvida. Ele então continua o processo de bootstrap, renderizando o AppComponent e todos os outros componentes.
7. Uso Seguro: Quando o AppComponent (ou qualquer outro lugar) pede a baseUrl do ConfigService, ela já está lá, segura e pronta para ser usada!

## Por Que Isso é Incrível?

- Ordem Garantida: Nunca mais se preocupe se a BASE_URL estará disponível. A aplicação só inicia quando ela estiver lá.
- Centralização: Toda a lógica de carregamento da configuração está em um só lugar (ConfigService e app-config.provider.ts).
- Testabilidade: Você pode facilmente mockar o ConfigService em seus testes.
- Clareza: A função provideAppConfig() torna a configuração do app.config.ts super legível, seguindo o padrão Angular.

Então, da próxima vez que sua aplicação precisar de uma informação vital antes de tudo, chame o APP_INITIALIZER! Ele é o bouncer que garante que sua festa Angular comece com o pé direito e sem surpresas!

Até a próxima aventura no mundo do código!