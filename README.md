# Description:

Application developed after completing Alura's React Training:
 - Initially built in JavaScript and later transitioned to TypeScript.

This application showcases information regarding squads within the Brazilian Army. It features a primary banner displaying a title and subtitle, followed by forms for registering new soldiers and a list of military ranks.

## Main Components:

### `Banner`:
- **Props:**
  - `imageBanner`: Background image for the banner.
  - `titleBanner`: Title of the banner.
  - `subtitleBanner`: Subtitle of the banner.

### `Forms`:
- **Props:**
  - `patents`: List of military rank names.
  - `bloodTypes`: List of blood types.
  - `onSoldierRegistered`: Callback function for adding a new soldier.

### `Patent`:
- **Props:**
  - `name`: Name of the military rank.
  - `primaryColor`: Primary color associated with the rank.
  - `secondaryColor`: Secondary color associated with the rank.
  - `soldiers`: List of soldiers holding this rank.

## Styles:
- `GradientBg`: Styling for the gradient background.
- `AppContainer`: Styling for the primary application container.
- `BodyContainer`: Styling for the body container of the application.

## Features:
- Presents a main banner with title and subtitle.
- Offers forms to register new soldiers, including options for selecting rank and blood type.
- Lists all available military ranks along with associated soldiers.

## Data:
- `BloodType`: List of blood types.
- `patents`: List of military ranks along with associated colors.

## State:
- `soldiers`: State holding the list of registered soldiers.

## Additional Feature:
- Upon registering a new soldier, they are automatically added to the list of soldiers.

## How to Use:
1. Clone the repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Run the application using `npm start` or `yarn start`.



///////////////////////////////////////////////////////////////////////////////////////////////////////////

# Descrição:

Aplicação feita após a Formação React da Alura:
 - aplicação inicialmente foi feita em Js e mudada para Ts.

Esta é uma aplicação que exibe informações sobre esquadrões do Exército Brasileiro. Ela apresenta um banner principal com o título e subtítulo, seguido por formulários para registrar novos soldados e uma lista de patentes militares.

## Componentes Principais:

### `Banner`:
- **Props:**
  - `imageBanner`: Imagem de fundo do banner.
  - `titleBanner`: Título do banner.
  - `subtitleBanner`: Subtítulo do banner.

### `Forms`:
- **Props:**
  - `patents`: Lista de nomes de patentes militares.
  - `bloodTypes`: Lista de tipos sanguíneos.
  - `onSoldierRegistered`: Função de callback para adicionar um novo soldado.

### `Patent`:
- **Props:**
  - `name`: Nome da patente militar.
  - `primaryColor`: Cor primária da patente.
  - `secondaryColor`: Cor secundária da patente.
  - `soldiers`: Lista de soldados com essa patente.

## Estilos:
- `GradientBg`: Estilo para o fundo gradiente.
- `AppContainer`: Estilo para o contêiner principal da aplicação.
- `BodyContainer`: Estilo para o contêiner do corpo da aplicação.

## Funcionalidades:
- Exibe um banner principal com título e subtítulo.
- Fornece formulários para registrar novos soldados, com opções para selecionar a patente e o tipo sanguíneo.
- Lista todas as patentes militares disponíveis com soldados associados a cada uma.

## Dados:
- `BloodType`: Lista de tipos sanguíneos.
- `patents`: Lista de patentes militares com cores associadas.

## Estado:
- `soldiers`: Estado que mantém a lista de soldados registrados.

## Funcionalidade Adicional:
- Quando um novo soldado é registrado, ele é adicionado à lista de soldados.

## Como usar:
1. Clone o repositório.
2. Instale as dependências usando `npm install` ou `yarn install`.
3. Execute a aplicação usando `npm start` ou `yarn start`.