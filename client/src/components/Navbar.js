import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='border-b-4 border-green-700 bg-green-600 text-center top-0 inline-block w-full text-white font-semibold'>
    <ul className='flex justify-center gap-4 py-4'>
        <li><Link to={"/"}>Home</Link></li>
        <li ><Link to={"/about"}>About</Link></li>
        <li ><Link to={"/article-list"}>Articles</Link></li>
    </ul>
    </nav>
  )
}

export default Navbar
