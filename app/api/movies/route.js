import { NextResponse } from 'next/server'
import prisma from '../../../src/lib/prisma'

export async function GET() {
  try {
    const movies = await prisma.movie.findMany({
      orderBy: { title: 'asc' }
    })
    return NextResponse.json(movies)
  } catch (error) {
    console.error('GET /api/movies error:', error)
    return NextResponse.json({ error: 'Failed to fetch movies' }, { status: 500 })
  }
}

export async function POST(req) {
  try {
    const body = await req.json()
    const { title, year, actors } = body

    const movie = await prisma.movie.create({
      data: {
        title,
        year: parseInt(year),
        actors,
      },
    })

    return NextResponse.json(movie)
  } catch (error) {
    console.error('POST /api/movies error:', error)
    return NextResponse.json({ error: 'Failed to add movie' }, { status: 500 })
  }
}