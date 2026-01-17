import React from 'react'
import { motion } from "motion/react"
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUpRight } from 'lucide-react'

const Footer = () => {
  // Helper to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: <Github size={20} />, href: "#", color: "hover:text-white" },
    { icon: <Linkedin size={20} />, href: "#", color: "hover:text-[#0077b5]" },
    { icon: <Twitter size={20} />, href: "#", color: "hover:text-[#1DA1F2]" },
    { icon: <Mail size={20} />, href: "mailto:your@email.com", color: "hover:text-[#ea4335]" },
  ]

  return (
    <footer className="bg-[#0d1117] pt-20 pb-10 border-t border-gray-800 text-gray-400">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Section: 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <h3 
              onClick={scrollToTop} 
              className="text-3xl font-bold text-white tracking-tighter cursor-pointer hover:text-[#70A9A1] transition-colors"
            >
              SHARANYA
            </h3>
            <p className="leading-relaxed max-w-xs">
              Building seamless digital experiences with code and creativity. Let's turn your ideas into reality.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Projects', 'Skills', 'Experience'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="hover:text-[#70A9A1] hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div>
            <h4 className="text-white font-semibold mb-6">Get In Touch</h4>
            <p className="mb-6">
              Open for collaborations and new opportunities.
            </p>
            
            {/* Social Icons Row */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -5 }}
                  className={`p-3 bg-[#161b22] rounded-full border border-gray-800 transition-colors duration-300 ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            
            {/* Copyright */}
            <p>&copy; {new Date().getFullYear()} Sharanya. All rights reserved.</p>
            
            {/* Made With Love */}
            <div className="flex items-center gap-1">
                <span>Made with</span>
                <Heart size={14} className="text-[#70A9A1] fill-[#70A9A1]" />
                <span>in React & Tailwind</span>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer