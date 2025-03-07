import { Link } from 'react-scroll'

const sections = ['Home', 'About', 'Projects', 'Contact']

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md text-white py-4 px-10 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Jayson Chiu</h1>

        <div className="space-x-6">
          {sections.map((section) => (
            <Link
              key={section}
              to={section.toLowerCase()}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-400 transition"
            >
              {section}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
