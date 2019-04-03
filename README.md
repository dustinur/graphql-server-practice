# GraphQL API Node Server

GraphQL API Node Server for Utah Valley University course DGM4790. Prisma data modeling tool with Docker-based PostgreSQL data store.

## Getting Started

To use Prisma locally, you need to have Docker installed on your machine. If you don't have Docker yet, you can download [here](https://www.docker.com/community-edition). Once installed, launch Docker desktop and keep running in background.

### Installing and starting server

In terminal, while in project directory, run:

```
npm install
```

With Docker running, start Prisma and launch the connected database with the following command:

```
npm run dockerStart
```

Deploy the Prisma API and generate the client:

```
npm run deploy
```

Seed the database:

```
npm run load
```

Start GraphQL server (Run in separate terminal if needed):

```
npm run start
```

### CRUD

- Launch Docker desktop
- Open Playground within your browser at [localhost:4000](http://localhost:4000/) (If 4000 does not load, try navigating to your machine's default env.PORT)
- Copy contents from `playgroundCRUD.txt` located in the root directory and paste in the playground for some basic CRUD operations.
