import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiCloseLine, RiMenu2Line } from "@remixicon/react"

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <nav className='flex flex-wrap justify-between items-start md:items-center text-white px-10 pt-6 md:px-35 relative'>
      <span className='text-3xl font-bold tracking-wide'>GOURAV</span>

      <ul className={`${menu ? "block" : "hidden"} mx-0 py-2 mt-4 font-semibold md:mt-0 px-4 rounded-xl bg-black bg-opacity-30 md:bg-transparent md:static md:flex gap-6 absolute top-16 right-10 z-10 md:relative md:right-auto md:top-auto`}>
        <li><Link to="/home" onClick={() => setMenu(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenu(false)}>About</Link></li>
        <li><Link to="/Skills" onClick={() => setMenu(false)}>Skills</Link></li>
        <li><Link to="/projects" onClick={() => setMenu(false)}>Projects</Link></li>
        <li><Link to="/contact" onClick={() => setMenu(false)}>Contact</Link></li>
      </ul>

      {menu ? (
        <RiCloseLine size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300' onClick={() => setMenu(false)} />
      ) : (
        <RiMenu2Line size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300' onClick={() => setMenu(true)} />
      )}
    </nav>
  )
}

export default Navbar