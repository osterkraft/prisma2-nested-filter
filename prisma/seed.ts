import { Photon } from '@generated/photon'
const photon = new Photon()

async function main() {

  const user1 = await photon.users.create({
    data: {
      email: 'alice@prisma.io',
      name: 'Alice',
      posts: {
        create: {
          title: 'Watch the talks from Prisma Day 2019',
          content: 'https://www.prisma.io/blog/z11sg6ipb3i1/',
          published: true,
          tags: {
            create: [
              {
                name: "Prisma"
              },
              {
                name: "News"
              },
              {
                name: "2019"
              },
            ]
          }
        },
      },
    },
  })
  const user2 = await photon.users.create({
    data: {
      email: 'bob@prisma.io',
      name: 'Bob',
      posts: {
        create: [
          {
            title: 'Subscribe to GraphQL Weekly for community news',
            content: 'https://graphqlweekly.com/',
            published: true,
            tags: {
              create: [
                {
                  name: "GraphQL"
                },
                {
                  name: "News"
                },
                {
                  name: "Cool stuff"
                },
              ]
            }
          },
          {
            title: 'Follow Prisma on Twitter',
            content: 'https://twitter.com/prisma/',
            published: false,
            tags: {
              create: [
                {
                  name: "Trending"
                },
              ]
            }
          },
        ],
      },
    },
  })

  console.log({ user1, user2 })
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect()
  })
