
## 💻 Como executar o projeto
Com o terminal de sua preferência, execute os seguintes comandos:
```
yarn
cd ios
pod install
yarn ios / yarn android
yarn jest //para executar os testes
```

## 📓 Estrutura de pastas

```
App.tsx
ios
android
src
    component
        CardPokemon
            CardPokemon.component.tsx
            CardPokemon.styles.ts
            CardPokemon.test.tsx
        ...
        index.ts            
    hook
        useDispatch.ts
        ...
    redux
        pokemon
            pokemon.api.ts
            pokemon.reducer.test.ts
            pokemon.reducer.ts
            pokemon.types.ts
        ...    
        store.ts
    screens
        Home
           Home.screens.tsx
           Home.styles.ts
        Details
           Details.screens.tsx
           Details.styles.ts 
           components
                AbilitiesList
                    AbilitiesList.component.tsx
                    AbilitiesList.test.tx
                ...    
        ...
        index.ts    
    shared
        routes
            Main.routes.tsx
            ...
    styles
        theme.ts
        ...
    utils
        specieTrasnformColor.ts
        ...
````

## 🚀  Tecnologias utilizadas

-  Styled-components: Pela facilidade de criar components e deixar o código mais organizado e fácil de manutenção
-  Redux-Toolkit-Query: Utilizando o poder do cache para controlar as chamadas de API deixando centralizado e fácil de debugar. Algumas facilidades que temos usando essa ferramenta é a padronização do código com hooks gerados automáticos, fácil de manipular loadings, errors, refetch, evitamos duplicar requests utilizando o sistema de cache, e manipulação de cache baseado no lifetime e a interação do usuário com o app.
-  React-Navigation v6: Biblioteca para fazermos o roteamento do app
-  Redux-Toolkit: Foi utilizado redux para tratarmos o gerenciamento de estado, visando uma estrutura escalável e pela escolha do RTK(Redux Toolkit Query)  escolhi o Redux. Também não escolhi o context pelo problema que temos com re-render que precisamos ficar tratando com cuidado no App, [documento do context](https://reactjs.org/docs/context.html) .
- Redux-Persist: Utilizado para mantermos as informações que queremos que seja persistida.
- Typescript: Visando uma melhor experiência de desenvolvimento utilizei typescript, com isso conseguimos ganhar tempo de desenvolvimento mapeando todas as apis e conseguindo utilizar o auto-complete, também dando mais segurança na hora de passar algum dado para nossas funções.
- Jest / React Native Testing Library: Utilizei para testarmos nossos components.

## ScreenShots

<div>
<img src="https://user-images.githubusercontent.com/38195454/161457807-ee0da46c-57f8-4d97-81eb-4510c3fd2ffd.png" width="440" height="890">
<img src="https://user-images.githubusercontent.com/38195454/161457822-aae8615a-53e8-4393-88bb-c7a8326d681d.png" width="440" height="890">
</div>

<div>
<img src="https://user-images.githubusercontent.com/38195454/161457835-2e2a8c2d-6c87-4cf1-b537-bf92655b1f26.png" width="440" height="890">
<img src="https://user-images.githubusercontent.com/38195454/161458536-1bc3010b-26a4-4b98-b7bd-c3c0a497e0f8.png" width="440" height="890">
</div>
