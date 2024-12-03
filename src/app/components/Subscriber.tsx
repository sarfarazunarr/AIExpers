import React from 'react'

const Subscriber = () => {
  return (
    <div className='w-full p-5 h-auto flex flex-col justify-start items-start bg-gradient-to-br from-blue-700 to-blue-950 rounded-b-md'>
      <h1 className='text-white text-4xl font-semibold'>Subscribe our Newseletter!</h1>
      
      <div className="grid grid-cols-5 gap-2">
        <input type="name" className='rounded-md bg-transparent border border-white outline-none text-white col-span-2 px-3 py-2' placeholder='Enter Name' />
        <input type="email" className='rounded-md bg-transparent border border-white outline-none text-white col-span-2 px-3 py-2' placeholder='Enter Email' />
        <button className='bg-white text-black px-3'>Subscribe</button>
      </div>
    </div>
  )
}

export default Subscriber
