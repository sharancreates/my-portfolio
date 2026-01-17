import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='p-5 bg-[#0d1117] flex justify-between pl-9'>
            <div>
                <h3 className='font-bold p-2'>Sharanya</h3>
            </div>
            <div className='flex gap-6'>
                <a className='p-4 relative group ' href='#'>About<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#70A9A1] transition-all duration-300 group-hover:w-full'></span></a>
                <a className='p-4 relative group ' href='#'>Project<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#70A9A1] transition-all duration-300 group-hover:w-full'></span></a>
                <a className='p-4 relative group ' href='#'>Resume<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#70A9A1] transition-all duration-300 group-hover:w-full'></span></a>
                <a className='p-4 relative group ' href='#'>Certifications and Experience<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#70A9A1] transition-all duration-300 group-hover:w-full'></span></a>
                <a className='p-4 relative group ' href='#'>Blogs<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-[#70A9A1] transition-all duration-300 group-hover:w-full'></span></a>
            </div>
        </nav>
    </>
  )
}

export default Navbar