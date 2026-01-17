import React from 'react'
import { motion } from "motion/react"

const Skills = () => {
    // defined with colors for a better UI effect
    const skillsData = [
        { name: "React", color: "#61DAFB" },
        { name: "Python", color: "#3776AB" },
        { name: "MERN Stack", color: "#94a3b8" }, // Neutral for stack
        { name: "MongoDB", color: "#47A248" },
        { name: "Express.js", color: "#000000" }, // White in dark mode handled below
        { name: "Node.js", color: "#339933" },
        { name: "Flask", color: "#000000" },
        { name: "Jinja2", color: "#B41717" },
        { name: "Tailwind CSS", color: "#06B6D4" },
        { name: "JavaScript", color: "#F7DF1E" },
        { name: "TypeScript", color: "#3178C6" },
    ]

    return (
        <div className='bg-[#0d1117] py-24 overflow-hidden'>
            
            {/* Section Title (Optional) */}
            <div className='text-center mb-16'>
                <h2 className='text-4xl font-extrabold text-white tracking-tight'>
                    My <span className='text-[#70A9A1]'>Tech Stack</span>
                </h2>
                <p className='text-gray-400 mt-4'>Technologies I use to build scalable products</p>
            </div>

            {/* Container for the Marquee */}
            <div className='flex flex-col gap-10 relative'>
                
                {/* Gradient Masks (Fade edges) */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0d1117] to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0d1117] to-transparent z-10 pointer-events-none" />

                {/* ROW 1: Moving Left */}
                <MarqueeRow items={skillsData} direction="left" speed={25} />

                {/* ROW 2: Moving Right (Slightly slower/faster for organic feel) */}
                <MarqueeRow items={skillsData.slice().reverse()} direction="right" speed={30} />
            </div>
        </div>
    )
}

// Reusable Sub-Component for a single row
const MarqueeRow = ({ items, direction = "left", speed = 100 }) => {
    return (
        <div className='flex overflow-hidden group'>
            <motion.div 
                className='flex flex-shrink-0 gap-10 px-5'
                initial={{ x: direction === "left" ? "0%" : "-100%" }}
                animate={{ x: direction === "left" ? "-100%" : "0%" }}
                transition={{ 
                    duration: 25, 
                    ease: "linear", 
                    repeat: Infinity 
                }}
            >
                {/* Loop 4 times to ensure no gaps on wide screens */}
                {[...items, ...items, ...items, ...items].map((skill, index) => (
                    <div 
                        key={index} 
                        className='px-6 py-3 border border-gray-800 rounded-full bg-[#161b22] hover:bg-gray-800 transition-colors duration-300 cursor-default flex items-center gap-2'
                    >
                        <span 
                            className="text-2xl font-bold text-gray-400 transition-colors duration-300"
                            style={{ 
                                // Dynamic hover color using CSS variable injection or inline style hack
                                '--hover-color': skill.color 
                            }}
                            onMouseEnter={(e) => e.target.style.color = skill.color}
                            onMouseLeave={(e) => e.target.style.color = ''}
                        >
                            {skill.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default Skills