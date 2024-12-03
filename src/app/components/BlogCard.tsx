import Image from 'next/image'
import React from 'react'

const BlogCard = ({authorShow}: {authorShow: boolean}) => {
  return (
    <div className='rounded-md border-2 border-gray-700 flex flex-col justify-start h-min'>
    <Image src={"/blog.png"} alt='post' className='size-full rounded-md' width={250} height={250} />
    <div className='p-5 flex flex-col bg-gray-950'>
        <h2 className='font-semibold pb-2 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
        <p className='text-gray-300 line-clamp-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum id error, ducimus maiores rerum harum, sed ab nesciunt doloribus, odio fugit voluptates quam!</p>
        <div className="flex flex-col gap-y-4 mt-2 items-start py-2">
            {authorShow && <div className="author flex justify-start items-center gap-2">
                <Image src={"/user.jpg"} alt='author' width={50} height={50} className='rounded-full' />
                <div className="flex flex-col">
                    <p className='text-white hover:underline'>Sarfaraz Unar</p>
                    <p className='text-gray-400 text-sm'>Full Stack Developer & CEO..</p>
                </div>
            </div>}
            <button className='bg-gray-200 w-full px-4 py-3 text-black border border-black hover:border-white hover:bg-transparent hover:text-white'>Read Now!</button>
        </div>
    </div>
</div>
  )
}

export default BlogCard
