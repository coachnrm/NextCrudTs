import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    return Response.json(await prisma.post.findMany())
}

export async function POST(request: Request) {
    try {
        const { title, content } = await request.json()
        const newPost = await prisma.post.create({
          data: {
            title,
            content,
          },
        })
        return Response.json(newPost)
      } catch (error) {
        return new Response(error as BodyInit, {
          status: 500,
        })
      }
}