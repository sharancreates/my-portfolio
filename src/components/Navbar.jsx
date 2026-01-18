import React, { useState } from 'react';

const Navbar = () => {
  // State to manage whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-[#0d1117]/70 backdrop-blur-md shadow-xl shadow-white/10 text-white'>
      <div className='flex justify-between items-center p-5 pl-9 pr-9'>
        
        {/* Logo */}
        <div>
          <h3 className='font-bold text-xl cursor-pointer'>Sharanya</h3>
        </div>

        {/* Desktop Menu (Hidden on Mobile) */}
        {/* md:flex means "flex on medium screens and up", otherwise hidden */}
        <div className='hidden md:flex gap-8'>
          <NavLink href='#'>About</NavLink>
          <NavLink href='#'>Project</NavLink>
          <NavLink href='#'>Skills</NavLink>
          <NavLink href='#'>Experience</NavLink>
          <NavLink href='#'>Blogs</NavLink>
        </div>

        {/* Hamburger Icon (Visible only on Mobile) */}
        {/* md:hidden means "hidden on medium screens and up" */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='focus:outline-none'>
            {isOpen ? (
              // X (Close) Icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              // Hamburger Icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* Conditionally render this block based on isOpen state */}
      {isOpen && (
        <div className='md:hidden flex flex-col items-center pb-6 gap-6 bg-[#0d1117]/95 backdrop-blur-xl border-t border-white/10'>
          <MobileNavLink href='#' onClick={toggleMenu}>About</MobileNavLink>
          <MobileNavLink href='#' onClick={toggleMenu}>Project</MobileNavLink>
          <MobileNavLink href='#' onClick={toggleMenu}>Skills</MobileNavLink>
          <MobileNavLink href='#' onClick={toggleMenu}>Experience</MobileNavLink>
          <MobileNavLink href='#' onClick={toggleMenu}>Blogs</MobileNavLink>
        </div>
      )}
    </nav>
  );
};

// Desktop Link Component
const NavLink = ({ href, children }) => (
  <a className='relative group py-2 font-medium text-sm lg:text-base' href={href}>
    {children}
    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#70A9A1] transition-all duration-300 group-hover:w-full'></span>
  </a>
);

// Mobile Link Component (Simple block styling)
const MobileNavLink = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={onClick} 
    className='text-lg hover:text-[#70A9A1] transition duration-300'
  >
    {children}
  </a>
);

export default Navbar;