import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const skills = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
  Tools: ['Git',  'VS Code'],
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Keahlian</h2>
        <Separator className="mb-8 w-16 bg-blue-500 h-1" />
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold text-slate-700 mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}