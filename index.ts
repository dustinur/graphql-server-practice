import * as path from "path";
import { GraphQLServer } from "graphql-yoga";
import { makePrismaSchema, prismaObjectType } from "nexus-prisma";
import { prisma } from "./generated/prisma-client";
import datamodelInfo from "./generated/nexus-prisma";

const Query = prismaObjectType({
  name: "Query",
  definition: t => t.prismaFields(["character", "characters"])
});
const Mutation = prismaObjectType({
  name: "Mutation",
  definition: t =>
    t.prismaFields(["createCharacter", "deleteCharacter", "updateCharacter"])
});

const schema = makePrismaSchema({
  types: [Query, Mutation],

  prisma: {
    datamodelInfo,
    client: prisma
  },

  outputs: {
    schema: path.join(__dirname, "./generated/schema.graphql"),
    typegen: path.join(__dirname, "./generated/nexus.ts")
  }
});

const server = new GraphQLServer({
  schema,
  context: { prisma }
});

server.start(() =>
  console.log(
    `GraphQl server running on http://localhost:${process.env.PORT || 4000}`
  )
);
