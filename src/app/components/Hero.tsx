import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div className='w-full h-[500px] p-10 bg-no-repeat bg-center bg-cover flex justify-start items-center' style={{backgroundImage: "url('./hero.jpg')"}}>
      <div className="flex flex-col justify-start items-start">
        <h1 className='text-5xl font-bold uppercase text-white'>Welcome to AI Expers</h1>
        <p className='text-lg text-gray-300 mt-4 w-1/2'>
          Discover the latest trends and insights in AI technology with our community blog. Dive into expert articles, engaging discussions, and cutting-edge resources tailored for AI enthusiasts and professionals alike.
        </p>
        <div className='w-1/2 my-5 items-center'>
            <input type="text" className='w-1/2 py-2 px-4 rounded-md focus:outline-none bg-white placeholder:text-gray-500 border border-transparent text-black focus:border-green-600' placeholder='Search Blog or Article...' />
            <button className='text-white px-3 py-2 h-auto text-xl pt-3'><FaMagnifyingGlass /></button>
        </div>
      </div>
    </div>
  )
}

export default Hero
