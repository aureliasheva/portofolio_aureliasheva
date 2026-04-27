'use client'

import { motion } from 'framer-motion'
import { Code, Wrench, Globe } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code className="w-5 h-5 text-blue-400" />,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS']
  },
  {
    title: 'Tools',
    icon: <Wrench className="w-5 h-5 text-purple-400" />,
    skills: ['Git', 'VS Code']
  },
  {
    title: 'Languages',
    icon: <Globe className="w-5 h-5 text-emerald-400" />,
    skills: ['Indonesian']
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Keahlian</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <motion.div 
                key={category.title} 
                variants={itemVariants}
                className="bg-zinc-900/40 border border-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-zinc-900/60 hover:border-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.div 
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium hover:bg-white/10 hover:text-white hover:border-blue-500/50 transition-colors cursor-default shadow-sm"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}