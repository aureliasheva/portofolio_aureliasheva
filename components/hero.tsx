import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import fotoProfil from '@/foto/foto-profil.png'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center max-w-2xl px-6">
        <div className="w-28 h-28 rounded-full bg-blue-100 mx-auto mb-6 overflow-hidden">
          <Image src={fotoProfil} alt="Foto Profil" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">
          Halo, Saya <span className="text-blue-600">Aurelia Sheva Denathrya</span> 👋
        </h1>
        <p className="text-xl text-white/90 mb-2">Web Developer</p>
        <p className="text-white/70 mb-8">
          Saya adalah seorang web developer yang bersemangat dalam menciptakan pengalaman digital yang menarik dan fungsional. Dengan keahlian dalam React, Next.js, dan Tailwind CSS, saya siap membantu mewujudkan ide-ide kreatif Anda menjadi kenyataan.  
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild className="text-white border-white">
            <Link href="#projects">Lihat Project Saya</Link>
          </Button>
          <Button variant="outline" asChild className="text-white border-white">
            <Link href="#contact">Hubungi Saya</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}