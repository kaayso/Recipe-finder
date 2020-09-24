## Project

▶️ [Live demo](https://recipe-finder-seven.vercel.app/ 'recipe finder')<br />
Recipe finder 👨🏻‍🍳

Find recipes from Ingredients you already have.

## Project Status

This project is not finished yet.
Current version : alpha.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` or `yarn` installed globally on your machine.

.env file (root of the project):

| variable            | description                                             |
| ------------------- | ------------------------------------------------------- |
| NODE_ENV            | Running mode ('production' or 'development')            |
| DB_URL              | Mongodb URL                                             |
| PORT                | Node server port                                        |
| CORS_ORIGIN         | CORS origin (development mode -> http://localhost:4200) |
| SECRET_TOKEN_ACCESS | Private key to encode/decode a JWT                      |

### Install application manualy

Installation (client):

`cd ./client`
`npm install`

Start client:

`ng serve --poll=2000`

To visit app:

`localhost:4200/`

Installation (server):

`cd ./server`
`npm install`

Start client:

`npm run dev` (nodemon)<br />
`npm run start`

### Install application using Docker

Installation & run application:

`docker-compose up`

## Project Screen Shot(s)

![Welcome section](public/resources/app-screen-shot1.png?raw=true 'Login')
![Project section](public/resources/app-screen-shot2.png?raw=true 'Home')
![Project section](public/resources/app-screen-shot3.png?raw=true 'Ingredients')
![Project section](public/resources/app-screen-shot4.png?raw=true 'Recipes')
