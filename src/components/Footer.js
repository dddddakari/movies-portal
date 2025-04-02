export default function Footer() {
    return (
      <footer className="bg-yellow-700 text-white p-6 mt-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Internet Movies</h3>
              <p>Your favorite movie in a simple database</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
              <p>Email: contact@movies.com</p>
              <p>Phone: (123) 456-7890</p>
              <p>Address: 123 Movie St, Hollywood</p>
            </div>
          </div>
          
          <div className="mt-6 text-center text-sm">
            <p>© {new Date().getFullYear()} DB. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }