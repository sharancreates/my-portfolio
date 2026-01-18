import React from 'react'
import { motion } from "motion/react"
import meImg from '../assets/me.png'

const Name = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-[#0d1117] text-white overflow-hidden px-10'>
        <div className='flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-10'>
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className='flex-1 text-center md:text-left z-10'>
                <h1 className='font-extrabold text-6xl md:text-8xl lg:text-9xl leading-tight tracking-tighter cursor-default'>
                    HI, I AM <br/>
                    <span className='text-[#A1E3F9] '>
                        SHARANYA
                    </span>
                </h1>
                
                <p className='mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto md:mx-0 leading-relaxed font-light'>
                    A developer with a designer's eye. I craft pixel-perfect UI/UX and robust Web & Mobile Apps, blending aesthetics with functionality. Currently expanding my horizons into AI & Machine Learning to build the next generation of smart applications.
                </p>

                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='mt-8 px-8 py-3 border border-[#70A9A1] text-[#70A9A1] rounded-full hover:bg-[#70A9A1] hover:text-white transition-colors duration-300'>
                    Let's Connect
                </motion.button>
            </motion.div>


            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className='flex-1 flex justify-center md:justify-end relative'
            >
                {/* Decorative blob behind image (optional glow) */}
                <div className="absolute top-0 right-10 w-72 h-72 bg-[#70A9A1] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>

                <motion.img 
                    src={meImg} 
                    alt="Sharanya"
                    // Floating Animation
                    animate={{ 
                        y: [0, -20, 0], // Moves up 20px then back down
                    }}
                    transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    className='w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-[#70A9A1]/20 shadow-2xl relative z-10'
                />
            </motion.div>
        </div>
    </div>
  )
}

export default Name