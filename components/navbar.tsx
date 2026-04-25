'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-xl text-slate-800">Portofolio</span>
        <div className="flex gap-4 items-center">
          <Link href="#about" className="text-slate-600 hover:text-slate-900 text-sm">
            Tentang
          </Link>
          <Link href="#projects" className="text-slate-600 hover:text-slate-900 text-sm">
            Project
          </Link>
          <Link href="#skills" className="text-slate-600 hover:text-slate-900 text-sm">
            Keahlian
          </Link>
          <Button asChild size="sm">
            <Link href="#contact">Kontak</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}