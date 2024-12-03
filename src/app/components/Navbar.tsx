import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-gray-950 p-4 px-10 grid grid-cols-8 gap-x-3'>
      <div className="col-span-2">
        <h1 className='text-4xl font-bold text-white'>AI<span className='text-green-500'>Expers</span></h1>
      </div>
      <nav className='col-span-5 flex justify-start items-center gap-5'>
        <Link href={"/"} className='text-gray-400 hover:text-white transition-all duration-200'>Home</Link>
        <Link href={"/"} className='text-gray-400 hover:text-white transition-all duration-200'>Blogs</Link>
        <Link href={"/"} className='text-gray-400 hover:text-white transition-all duration-200'>Categories</Link>
        <Link href={"/"} className='text-gray-400 hover:text-white transition-all duration-200'>Top Articles</Link>
        <Link href={"/"} className='text-gray-400 hover:text-white transition-all duration-200'>Top Trends</Link>
        <Link href={"/"} className='text-gray-400 hover:text-white transition-all duration-200'>Courses</Link>
        <Link href={"/"} className='text-gray-400 hover:text-white transition-all duration-200'>AI Experts</Link>
        <Link href={"/"} className='text-gray-400 hover:text-white transition-all duration-200'>Contribute</Link>
      </nav>
      <div className="flex justify-start items-center gap-3">
        <Link href={"/"} className='py-1 px-4 text-white hover:text-white transition-all duration-200 rounded-full bg-green-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'>Login</Link>
        <Link href={"/"} className='py-1 px-4 text-black hover:text-white transition-all duration-200 rounded-full bg-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'>Signup</Link>
      </div>
    </div>
  )
}

export default Navbar
