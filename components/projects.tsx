'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Layers } from 'lucide-react'

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
)

const projects = [
  {
    title: 'MileBuzz (Tracking System)',
    description: 'Solusi pelacakan pengiriman logistik hingga titik terakhir dengan presisi lokasi dan estimasi waktu realtime',
    tech: ['Next.js', 'Tracking', 'OpenStreetMap', 'Geolocation'],
    demo: 'https://compass-last-mile.vercel.app/',
  },
  {
    title: 'SIG Satpol PP Prov. Jateng',
    description: 'Sistem Informasi Geografis untuk pemetaan titik gangguan ketertiban umum dan manajemen penugasan personel operasional di lapangan.',
    tech: ['WebGIS', 'Geolocation', 'Reporting System'],
    demo: 'https://gis.satpolpp.jatengprov.go.id/',
  },
  {
    title: 'Sistem Laporan Penjualan BUMDes',
    description: 'Platform pelaporan keuangan dan performa bisnis untuk seluruh entitas usaha milik desa di wilayah kabupaten.',
    tech: ['Next.js', 'TailwindCSS', 'Accounting System'],
    demo: 'https://growong.bumdesmglkab.com/',
  },
  {
    title: 'Company Profile Wahana Sakti Geosolusi',
    description: 'Website company profile untuk Wahana Sakti Geosolusi, perusahaan yang bergerak di bidang jasa Software Development & Geospatial Solutions.',
    tech: ['Next.js', 'Tracking', 'OpenStreetMap', 'Geolocation'],
    demo: 'https://www.wsg.co.id/',
  },
  {
    title: 'Monitoring Building Electrical Management',
    description: 'Sistem manajemen energi gedung pintar yang memantau konsumsi listrik dan performa kelistrikan secara otomatis.',
    tech: ['IoT Core', 'MQTT Protocol', 'React Dashboard'],
    demo: 'https://building-energy-frontend.vercel.app/login',
  },
  {
    title: 'Portofolio website Next.JS',
    description: 'Website portofolio pribadi yang dibangun dengan Next.js dan Tailwind CSS.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn/ui'],
    github: 'https://github.com/username/project2',
    demo: 'https://portofolio-aureliasheva.vercel.app/',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={cardVariants} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Project Saya</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div 
                key={i} 
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group flex flex-col h-full bg-zinc-900/40 border border-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-zinc-900/60 hover:border-white/10 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Layers className="text-blue-400 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-2 mt-auto">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs font-medium text-zinc-300 bg-white/5 border border-white/5 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="px-6 py-4 border-t border-white/5 bg-white/[0.02] flex gap-3">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 py-2 rounded-lg bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-center p-2 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}