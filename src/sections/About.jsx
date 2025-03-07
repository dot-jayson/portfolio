import { motion } from 'framer-motion'

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gray-800"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-300">About Me</h2>
        <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
          Hi, I'm [Your Name], a passionate developer who loves creating modern,
          responsive, and user-friendly web experiences. With a strong
          background in both frontend and backend development, I enjoy solving
          complex problems and constantly improving my skills.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-300 text-center">
          Skills
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          <motion.div
            className="text-center bg-gray-700 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h4 className="font-bold text-gray-300 mb-4 flex justify-center items-center">
              <i className="fas fa-laptop-code mr-2 text-blue-400"></i>Frontend
            </h4>
            <ul className="text-gray-400 space-y-2">
              <li>
                <i className="fab fa-html5 text-orange-500"></i> HTML
              </li>
              <li>
                <i className="fab fa-css3-alt text-blue-500"></i> CSS
              </li>
              <li>
                <i className="fab fa-js-square text-yellow-400"></i> JavaScript
              </li>
              <li>
                <i className="fab fa-react text-cyan-400"></i> React
              </li>
              <li>
                <i className="fab fa-tailwindcss text-teal-400"></i> Tailwind
                CSS
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="text-center bg-gray-700 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <h4 className="font-bold text-gray-300 mb-4 flex justify-center items-center">
              <i className="fas fa-cogs mr-2 text-blue-400"></i>Backend
            </h4>
            <ul className="text-gray-400 space-y-2">
              <li>
                <i className="fab fa-node text-green-500"></i> Node.js
              </li>
              <li>
                <i className="fas fa-server text-gray-400"></i> Express
              </li>
              <li>
                <i className="fab fa-fire text-orange-500"></i> Firebase
              </li>
              <li>
                <i className="fas fa-database text-green-400"></i> MongoDB
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="text-center bg-gray-700 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          >
            <h4 className="font-bold text-gray-300 mb-4 flex justify-center items-center">
              <i className="fas fa-tools mr-2 text-blue-400"></i>Tools &
              Technologies
            </h4>
            <ul className="text-gray-400 space-y-2">
              <li>
                <i className="fab fa-git text-orange-500"></i> Git
              </li>
              <li>
                <i className="fab fa-github text-gray-500"></i> GitHub
              </li>
              <li>
                <i className="fas fa-terminal text-green-500"></i> VS Code
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
