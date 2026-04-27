'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const navItems = [
  { name: 'Tentang', href: '#about' },
  { name: 'Project', href: '#projects' },
  { name: 'Keahlian', href: '#skills' },
  { name: 'Kontak', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = navItems.map(item => item.href.substring(1))
      let current = ''
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 250 && rect.bottom >= 250) {
            current = section
            break
          }
        }
      }
      
      // Jika scroll mencapai bagian paling bawah halaman, aktifkan "Kontak"
      if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50) {
        current = 'contact'
      }

      if (current) {
        setActiveSection(current)
      } else if (window.scrollY < 250) {
        setActiveSection('') // Di bagian Hero (paling atas)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Cek posisi awal saat komponen di-mount
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`pointer-events-auto transition-all duration-500 rounded-full px-6 py-3 flex items-center gap-2 sm:gap-6 ${
          scrolled 
            ? 'bg-zinc-900/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50' 
            : 'bg-zinc-900/40 backdrop-blur-md border border-white/5'
        }`}
      >
        <Link href="#" onClick={() => setActiveSection('')} className="font-bold text-xl text-white tracking-tighter pr-4 border-r border-white/10 hidden sm:block">
          AS<span className="text-blue-500">.</span>
        </Link>
        <div className="flex items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1)
            
            return (
              <Link 
                key={item.name}
                href={item.href} 
                onClick={() => setActiveSection(item.href.substring(1))}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-300 z-10 ${
                  isActive ? 'text-zinc-950' : 'text-zinc-300 hover:text-white'
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </div>
      </motion.nav>
    </div>
  )
}