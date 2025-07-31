import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    // const categories = await prisma.category.findMany()
    const categories = await prisma.category.findMany({
      where: {
        parentId: null,
      },
    })
    return NextResponse.json(categories)
  } catch (error) {
    console.error('[CATEGORIES_GET', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
