import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-white" style={{backgroundColor: 'oklch(11.757% 0.0326 280.154)'}}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-2">Hubungi Saya</h2>
        <Separator className="mb-8 w-16 bg-blue-400 h--1 mx-auto" />
        <p className="text-white/80 mb-8 max-w-md mx-auto">
          Punya project menarik atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya!
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg">
            <a href="mailto:Aurelarl2024@gmail.com">✉️ Email Saya</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-white text-white hover:bg-white hover:text-white"
          >
            <a href="https://github.com/aureliasheva" target="_blank">GitHub</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-white text-white hover:bg-white hover:text-white"
          >
            <a href="https://www.linkedin.com/in/aurelia-sheva-denathrya-56070b405/" target="_blank">LinkedIn</a>
          </Button>
        </div>
        <p className="text-white/70 text-sm mt-12">
          © 2026 Aurelia Sheva Denathrya. Dibuat dengan Next.js & shadcn/ui
        </p>
      </div>
    </section>
  )
}