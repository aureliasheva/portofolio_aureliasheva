'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, User, Code2, Heart } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={cardVariants} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tentang Saya</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Bio Card */}
            <motion.div variants={cardVariants} className="md:col-span-2 bg-zinc-900/50 border border-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-zinc-900/80 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-blue-400 w-6 h-6" />
                <h3 className="text-xl font-semibold text-white">Developer Journey</h3>
              </div>
              <p className="text-zinc-300 leading-relaxed mb-4 text-lg">
                Saya adalah seorang web developer dengan passion dalam menciptakan pengalaman digital yang menarik dan fungsional. Dengan latar belakang di bidang teknologi informasi, saya memiliki keahlian dalam berbagai bahasa pemrograman dan framework modern seperti <span className="text-white font-medium">React, Next.js, dan Tailwind CSS</span>.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Saya selalu bersemangat untuk belajar teknologi baru dan menerapkannya dalam proyek-proyek yang memecahkan masalah dunia nyata.
              </p>
            </motion.div>

            {/* Info Cards */}
            <motion.div variants={cardVariants} className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/5 backdrop-blur-sm rounded-3xl p-8 flex flex-col justify-center hover:border-white/10 transition-colors">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                    <User className="text-zinc-300 w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">Nama</p>
                    <p className="text-white font-medium truncate">Aurelia Sheva</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                    <MapPin className="text-zinc-300 w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">Lokasi</p>
                    <p className="text-white font-medium">Magelang, ID</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="text-zinc-300 w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">Email</p>
                    <a href="mailto:Aurelarl2024@gmail.com" className="text-white font-medium hover:text-blue-400 transition-colors truncate block">Hubungi via Email</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hobbies Card */}
            <motion.div variants={cardVariants} className="bg-zinc-900/50 border border-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-zinc-900/80 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-pink-400 w-6 h-6" />
                <h3 className="text-xl font-semibold text-white">Di Luar Coding</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed">
                Ketika tidak sedang menulis kode, saya menghabiskan waktu dengan mendengarkan musik, bermain game, berenang, berlari, dan terus mencari pengetahuan baru.
              </p>
            </motion.div>

            {/* Availability Card */}
            <motion.div variants={cardVariants} className="md:col-span-2 relative overflow-hidden bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 backdrop-blur-sm rounded-3xl p-8 flex items-center justify-between group">
              <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Status Kerja</h3>
                </div>
                <p className="text-emerald-200/80 hidden sm:block">Tersedia untuk proyek baru</p>
              </div>
              <div className="relative z-10 bg-emerald-500/20 px-4 py-2 rounded-full border border-emerald-500/30">
                <span className="text-emerald-300 font-medium whitespace-nowrap text-sm sm:text-base">Freelance / Fulltime</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}