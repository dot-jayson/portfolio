import { useEffect } from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

const App = () => {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="bg-gray-900 text-white">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
