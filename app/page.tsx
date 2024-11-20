'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import Loading from "@/components/InitLoading"
import Menu from '@/components/Menu'
import Hero from '@/components/Hero'
import HorizontalGallery from '@/components/HorizontalGallery'
import Story from '@/components/StorySection'
import ParallaxGallery from '@/components/ParallexGallery'
import Profound from '@/components/ProfoundSection'
import About from '@/components/About'
import Instagram from '@/components/Instagram'
import Footer from '@/components/Footer'


export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false) // Controls component visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000);

    return () => clearTimeout(timer)
  }, [])


  if (!isVisible) return <Loading />

  return (
    <div className="relative min-h-screen bg-[#faf9f7]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center text-white justify-between px-8 py-6">
        <Link
          href="/"
          className="text-sm tracking-[0.2em] hover:opacity-70 transition-opacity"
        >
          SHUBHAM PHOTOSTUDIO
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-sm tracking-[0.2em] hover:opacity-70 transition-opacity"
        >
          MENU
        </button>
      </header>


      {/* Menu Overlay */}
      {isMenuOpen && (
        <Menu setIsMenuOpen={setIsMenuOpen} />
      )}

      <Hero />
      <Story />
      <HorizontalGallery />
      <Profound />
      < ParallaxGallery />
      <About />
      <Instagram />
      <Footer />
    </div>
  )
}