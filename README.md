# RESTful CRUD Node Server

GraphQL API Node Server for Utah Valley University course DGM4790. Prisma data modeling tool with Docker-based PostgreSQL data store.

## Getting Started

To use Prisma locally, you need to have Docker installed on your machine. If you don't have Docker yet, you can download [here](https://www.docker.com/community-edition).

### Installing and starting server

In terminal, while in project directory, run:


```
npm install
```

To start Prisma and launch the connected database, run the following command:

```
docker-compose up -d
```

Deploy the Prisma API and generate the client:

```
npm run deploy
```

Seed the database

```
npm run load
```



### CRUD Operations

- Launch Docker desktop
- Open Playground within your browser at [localhost:4466](http://localhost:4466/)
- Copy the contents from `playgroundCRUD.txt` located in the root directory and paste in the playground for some basic CRUD operations.
