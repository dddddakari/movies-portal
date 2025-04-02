'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [movies, setMovies] = useState([])
  const [form, setForm] = useState({ title: '', year: '', actors: '' })
  const [editingId, setEditingId] = useState(null)

  useEffect(() => {
    fetch('/api/movies')
      .then(res => res.json())
      .then(data => {
        if (data) setMovies(data)
      })
      .catch((err) => console.error('Fetch failed:', err))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newMovie = {
      title: form.title,
      year: form.year,
      actors: form.actors.split(',').map(a => a.trim())
    }

    let url
    let method

    if (editingId) {
      url = `/api/movies/${editingId}`
      method = 'PUT'
    } else {
      url = '/api/movies'
      method = 'POST'
    }

    const res = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMovie)
    })

    const updatedMovie = await res.json()

    if (editingId) {
      setMovies(movies.map(m => m.id === editingId ? updatedMovie : m))
      setEditingId(null)
    } else {
      setMovies([...movies, updatedMovie])
    }

    setForm({ title: '', year: '', actors: '' })
  }

  const handleDelete = async (id) => {
    await fetch(`/api/movies/${id}`, { method: 'DELETE' })
    setMovies(movies.filter(movie => movie.id !== id))
  }

  const handleEdit = (movie) => {
    setForm({
      title: movie.title,
      year: movie.year,
      actors: movie.actors.join(', ')
    })
    setEditingId(movie.id)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Movie Catalog</h1>

      <form onSubmit={handleSubmit} className="mb-6 space-y-3">
        <input type="text" placeholder="Title" value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border p-2 w-full" required />
        <input type="number" placeholder="Year" value={form.year}
          onChange={(e) => setForm({ ...form, year: e.target.value })}
          className="border p-2 w-full" required />
        <input type="text" placeholder="Actors (comma separated)" value={form.actors}
          onChange={(e) => setForm({ ...form, actors: e.target.value })}
          className="border p-2 w-full" required />
        <button type="submit" className="bg-yellow-600 text-white px-4 py-2 rounded-3xl">
          {editingId ? 'Update Movie' : 'Add Movie'}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map(movie => (
          <div key={movie.id} className="bg-white rounded-xl shadow-md p-3">
            <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
            <p className="text-gray-500 mb-2">Year: {movie.year}</p>
            <div>
              <h3 className="font-medium">Actors:</h3>
              <ul className="list-disc list-inside">
                {movie.actors.map((actor, index) => (
                  <li key={index}>{actor}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-end gap-2 mt-2">
              <button onClick={() => handleEdit(movie)} className="text-blue-600 hover:underline">Edit</button>
              <button onClick={() => handleDelete(movie.id)} className="text-red-600 hover:underline">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
