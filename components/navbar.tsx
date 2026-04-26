'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-md border-b border-blue-500/10 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-xl text-white">Portofolio</span>
        <div className="flex gap-4 items-center">
          <Link href="#about" className="text-white hover:text-slate-100 text-sm transition duration-300 ease-out hover:-translate-y-0.5">
            Tentang
          </Link>
          <Link href="#projects" className="text-white hover:text-slate-100 text-sm transition duration-300 ease-out hover:-translate-y-0.5">
            Project
          </Link>
          <Link href="#skills" className="text-white hover:text-slate-100 text-sm transition duration-300 ease-out hover:-translate-y-0.5">
            Keahlian
          </Link>
          <Button asChild size="sm" className="text-white border-white transition duration-300 ease-out hover:-translate-y-0.5">
            <Link href="#contact">Kontak</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}