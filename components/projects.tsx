import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const projects = [
  {
    title: 'Portfolio website html',
    description: 'Website portofolio pribadi untuk menampilkan project dan keterampilan.',
    tech: ['HTML', 'CSS'],
    github: 'https://github.com/username/project1',
  },
  {
    title: 'Portfolio website Next.JS',
    description: 'Website portofolio pribadi yang dibangun dengan Next.js dan Tailwind CSS.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn/ui'],
    github: 'https://github.com/username/project2',
    demo: 'https://portofolio-aureliasheva.vercel.app/',
  },

]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Project Saya</h2>
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
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank">GitHub</a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank">Demo</a>
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