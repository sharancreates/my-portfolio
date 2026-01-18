import React from 'react'
import { motion } from "motion/react"
import { ExternalLink, Github } from 'lucide-react'

const projectsData = [
    {
        id: 1,
        title: "AROGYA",
        description: "A hospital management system with role based access over admin, patient and doctors with dynamic appointment management.",
        image: "https://placehold.co/600x400/161b22/70A9A1?text=Hospital+Management+System", 
        tech: ["Flask", "Jinja2", "SQLite", "Vanilla CSS"],
        liveLink: "#",
        githubLink: "#"
    },
    {
        id: 2,
        title: "ResuMatch AI",
        description: "A Python script that matches job description and your resume to give the ATS score using hybrid technology.",
        image: "https://placehold.co/600x400/161b22/70A9A1?text=ResuMatch+AI",
        tech: ["Python", "React.js", "sentence-transformers"],
        liveLink: "#",
        githubLink: "#"
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3 
        }
    }
}

const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}


const Projects = () => {
  return (
    <section className="bg-[#0d1117] py-24 px-6" id="projects">
        <div className="max-w-6xl mx-auto">

            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                    Featured <span className="text-[#70A9A1]">Projects</span>
                </h2>
                <div className="w-20 h-1 bg-[#70A9A1] mx-auto mt-4 rounded-full"></div>
            </motion.div>

            {/* Projects Grid Container */}
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </motion.div>
        </div>
    </section>
  )
}

const ProjectCard = ({ project }) => {
    return (
        <motion.div variants={cardVariants} whileHover={{ y: -10 }} // Lift effect on hover
            className="group relative bg-[#161b22] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#70A9A1]/50 transition-colors duration-500 shadow-lg"
        >
            {/* Image Container with Overflow Hidden for Zoom Effect */}
            <div className="relative h-64 overflow-hidden">
                 {/* The Image itself */}
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Overlay gradient to make text pop */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Content Section */}
            <div className="p-8 relative z-10 -mt-10">
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#70A9A1] transition-colors duration-300">
                    {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                    {project.description}
                </p>
                
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech, index) => (
                        <span key={index} className="text-sm font-medium text-[#70A9A1] bg-[#70A9A1]/10 border border-[#70A9A1]/20 px-4 py-1.5 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links / Buttons */}
                <div className="flex items-center gap-6">
                    <a href={project.liveLink} className="flex items-center gap-2 text-white hover:text-[#70A9A1] font-semibold transition-colors group/link">
                        Live Demo <ExternalLink size={18} className="group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                    <a href={project.githubLink} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                        <Github size={20} /> Source Code
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects