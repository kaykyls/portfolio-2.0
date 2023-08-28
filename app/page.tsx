import Image from 'next/image'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div className='bg-white'>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}
