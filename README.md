# Pokedex React Native Expo

<table>
<tr>
  <td>
    <img src="https://user-images.githubusercontent.com/38195454/161457807-ee0da46c-57f8-4d97-81eb-4510c3fd2ffd.png" />
  </td>
  <td>
    <img src="https://user-images.githubusercontent.com/38195454/161457822-aae8615a-53e8-4393-88bb-c7a8326d681d.png" />
  </td>
  <td>
    <img src="https://user-images.githubusercontent.com/38195454/161457835-2e2a8c2d-6c87-4cf1-b537-bf92655b1f26.png" />
  </td>
 <td>
    <img src="https://user-images.githubusercontent.com/38195454/161458536-1bc3010b-26a4-4b98-b7bd-c3c0a497e0f8.png" />
  </td>
</tr>
</table>

## 💻 How build the project
With the terminal of your choice, run the following commands:
```
yarn
cd ios
pod install
yarn ios / yarn android
yarn jest //execute the tests
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

## 🚀  Technologies

-  Styled-components
-  Redux-Toolkit-Query
-  React-Navigation v6
-  Redux-Toolkit
- Redux-Persist
- Typescript
- Jest / React Native Testing Library
