import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import './globals.css'

export const metadata = {
  title: ' Movie Portal  ;P',
  description: 'Internet Movies Rental movie database',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}