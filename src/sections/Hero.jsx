import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <h1 className="text-5xl font-bold">
        Hi, I'm <span className="text-blue-500">Jayson Chiu</span>
      </h1>
      <h2 className="text-2xl mt-3 text-gray-300">
        <Typewriter
          words={['Frontend Developer', 'UI/UX Designer', 'Tech Enthusiast']}
          loop
          cursor
          typeSpeed={80} // Adjust typing speed
          deleteSpeed={50} // Controls deletion speed (fast but smooth)
          delaySpeed={1000} // Pause before deleting
        />
      </h2>
      <p className="text-lg mt-4 max-w-2xl text-gray-400">
        I create modern, responsive web experiences with a focus on design and
        performance.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        View My Work
      </button>
    </section>
  )
}

export default Hero
