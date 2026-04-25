import { Separator } from '@/components/ui/separator'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Tentang Saya</h2>
        <Separator className="mb-8 w-16 bg-blue-500 h-1" />
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-slate-600 leading-relaxed mb-4">
                Saya adalah seorang web developer dengan passion dalam menciptakan pengalaman digital yang menarik dan fungsional. Dengan latar belakang di bidang teknologi informasi, saya memiliki keahlian dalam berbagai bahasa pemrograman dan framework modern seperti React, Next.js, dan Tailwind CSS. Saya selalu bersemangat untuk belajar teknologi baru dan menerapkannya dalam proyek-proyek saya.    
            </p>
            <p className="text-slate-600 leading-relaxed">
              Ketika tidak coding, saya suka mendengarkan musik, bermain game, berenang, berlari dan menambah pengetahuan.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between"><span className="text-slate-500">Nama</span><span className="font-medium">Aurelia Sheva Denathrya</span></div>
            <Separator />
            <div className="flex justify-between"><span className="text-slate-500">Lokasi</span><span className="font-medium">Magelang, Jawa Tengah</span></div>
            <Separator />
            <div className="flex justify-between"><span className="text-slate-500">Email</span><span className="font-medium">Aurelarl2024@gmail.com</span></div>
            <Separator />
            <div className="flex justify-between"><span className="text-slate-500">Tersedia untuk</span><span className="font-medium text-green-600">Freelance / Fulltime</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}