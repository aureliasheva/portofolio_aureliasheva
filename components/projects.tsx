import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

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

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-2">Project Saya</h2>
        <Separator className="mb-8 w-16 bg-blue-500 h-1" />
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="secondary">{t}</Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank">Live</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}