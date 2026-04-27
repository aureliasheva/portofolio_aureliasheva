'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import fotoProfil from '@/foto/foto-profil.png'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

const photoVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.7 } }
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Photo Section - Left */}
          <motion.div variants={photoVariants} className="w-full md:w-5/12 flex justify-center md:justify-end order-1 md:order-none">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-2xl opacity-40 animate-pulse" />
              <div className="relative w-full h-full rounded-full bg-zinc-800 mx-auto overflow-hidden border-4 border-white/10 shadow-2xl">
                <Image src={fotoProfil} alt="Foto Profil" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Text Section - Right */}
          <div className="w-full md:w-7/12 text-center md:text-left order-2 md:order-none">
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight">
              Halo, Saya <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Aurelia Sheva
              </span> 👋
            </motion.h1>
            
            <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-medium text-zinc-300 mb-6">
              Web Developer
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-base md:text-lg text-zinc-400 mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
              Saya adalah seorang web developer yang bersemangat dalam menciptakan pengalaman digital yang menarik dan fungsional. Dengan keahlian dalam <span className="text-white font-medium">React, Next.js, dan Tailwind CSS</span>, saya siap membantu mewujudkan ide-ide kreatif Anda menjadi kenyataan.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <Button asChild size="lg" className="rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto font-semibold">
                <Link href="#projects">Lihat Project Saya</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full bg-transparent text-white border-white/20 hover:bg-white/10 transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto font-semibold">
                <Link href="#contact">Hubungi Saya</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}