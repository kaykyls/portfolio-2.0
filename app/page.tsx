import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'

export default function Home() {
  return (
    <div className='bg-white'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}