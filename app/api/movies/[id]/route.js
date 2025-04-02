import { NextResponse } from 'next/server'
import prisma from '../../../../src/lib/prisma'

export async function PUT(req, { params }) {
  try {
    const id = params.id
    const { title, year, actors } = await req.json()

    const updated = await prisma.movie.update({
      where: { id },
      data: {
        title,
        year: parseInt(year),
        actors,
      },
    })

    return NextResponse.json(updated)
  } catch (error) {
    console.error('PUT /api/movies/[id] error:', error)
    return NextResponse.json({ error: 'Failed to update movie' }, { status: 500 })
  }
}

export async function DELETE(_, { params }) {
  try {
    const id = params.id
    await prisma.movie.delete({ where: { id } })
    return NextResponse.json({ message: 'Movie deleted' })
  } catch (error) {
    console.error('DELETE /api/movies/[id] error:', error)
    return NextResponse.json({ error: 'Failed to delete movie' }, { status: 500 })
  }
}