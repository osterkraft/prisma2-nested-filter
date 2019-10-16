import { nexusPrismaPlugin } from 'nexus-prisma'
// import { Photon } from '@generated/photon'
import { queryType, mutationType, objectType, idArg, makeSchema, stringArg } from 'nexus'
import { GraphQLServer } from 'graphql-yoga'
import * as types from './types'
import { join } from 'path'
import { createContext } from './context'

// const photon = new Photon()

// const nexusPrisma = nexusPrismaPlugin({
//   photon: (ctx: Context) => ctx.photon,
// })

export const schema = makeSchema({
  types: [types, nexusPrismaPlugin({ types })],
})

// const schema = makeSchema({
//   types: [Query, Mutation, Post, User, Tag, nexusPrisma],
//   outputs: {
//     typegen: join(__dirname, '../generated/nexus-typegen.ts'),
//     schema: join(__dirname, '/schema.graphql'),
//   },
//   typegenAutoConfig: {
//     sources: [
//       {
//         source: '@generated/photon',
//         alias: 'photon',
//       },
//       {
//         source: join(__dirname, 'types.ts'),
//         alias: 'ctx',
//       },
//     ],
//     contextType: 'ctx.Context',
//   },
// })

const server = new GraphQLServer({
  schema,
  context: createContext(),
})

server.start(() => console.log(`🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/ts/graphql#6-using-the-graphql-api`))
