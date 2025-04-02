import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-yellow-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold"> Movies 4 Us</Link>
      </div>
    </nav>
  )
}