import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center px-6 gap-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-4xl md:text-5xl font-bold"
      >
        Hi, I'm <span className="text-blue-500">Jayson Chiu</span>
      </motion.h1>

      <h2 className="text-xl md:text-2xl text-gray-300">
        <Typewriter
          words={['Frontend Developer', 'UI/UX Designer', 'Tech Enthusiast']}
          loop
          cursor
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>

      <p className="text-base md:text-lg max-w-2xl text-gray-400">
        I create modern, responsive web experiences with a focus on design and
        performance.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        className="mt-6"
      >
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
        >
          View My Work
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero
