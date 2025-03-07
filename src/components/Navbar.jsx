import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react' // Icons for open/close menu

const sections = ['Home', 'About', 'Projects', 'Contact']

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo or Name */}
        <h1 className="text-2xl font-bold">Jayson Chiu</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <li key={section}>
              <Link
                to={section.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-400 transition"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col space-y-4 p-4"
        >
          {sections.map((section) => (
            <Link
              key={section}
              to={section.toLowerCase()}
              smooth={true}
              duration={500}
              className="block text-center py-2 hover:text-blue-400 transition cursor-pointer"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {section}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
