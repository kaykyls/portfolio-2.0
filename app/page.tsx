"use client"

import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useSearchParams } from 'next/navigation'

export default function Home() {
    const searchParams = useSearchParams()
    const currentLanguage = searchParams.get('lang')

  return (
    <div className='bg-white'>
      <Navbar currentLanguage={currentLanguage} />
      <Hero currentLanguage={currentLanguage} />
      <About currentLanguage={currentLanguage} />
      <Skills currentLanguage={currentLanguage} />
      <Projects currentLanguage={currentLanguage} />
      <Contact currentLanguage={currentLanguage} />
      <Footer currentLanguage={currentLanguage} />
    </div>
  )
}