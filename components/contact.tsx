'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
)

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
)

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900/40 border border-white/5 backdrop-blur-md rounded-3xl p-10 md:p-16 shadow-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Tertarik Bekerja Sama?</h2>
          <p className="text-zinc-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
            Punya project menarik atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya. Mari ciptakan sesuatu yang luar biasa bersama-sama!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="w-full sm:w-auto rounded-full bg-white text-zinc-950 hover:bg-zinc-200 transition-transform hover:scale-105 active:scale-95 font-semibold gap-2 h-12 px-8">
              <a href="mailto:Aurelarl2024@gmail.com">
                <Mail className="w-5 h-5" />
                Email Saya
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto rounded-full bg-transparent text-white border-white/20 hover:bg-white/10 transition-transform hover:scale-105 active:scale-95 font-semibold gap-2 h-12 px-8"
            >
              <a href="https://github.com/aureliasheva" target="_blank" rel="noreferrer">
                <GithubIcon className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto rounded-full bg-transparent text-white border-white/20 hover:bg-white/10 transition-transform hover:scale-105 active:scale-95 font-semibold gap-2 h-12 px-8"
            >
              <a href="https://www.linkedin.com/in/aurelia-sheva-denathrya-56070b405/" target="_blank" rel="noreferrer">
                <LinkedinIcon className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-zinc-500 text-sm mt-16"
        >
          © {new Date().getFullYear()} Aurelia Sheva Denathrya. Dibangun dengan Next.js, Tailwind CSS & Framer Motion.
        </motion.p>
      </div>
    </section>
  )
}