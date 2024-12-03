import Image from 'next/image'
import React from 'react'

const MainPost = () => {
    return (
        <div className='rounded-t-md border-2 border-gray-700 flex flex-col justify-start'>
            <Image src={"/blog.png"} alt='post' className='size-full rounded-md' width={500} height={500} />
            <div className='p-5 flex flex-col bg-gray-950'>
                <h2 className='font-semibold text-3xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                <p className='text-sm py-2 text-gray-400'>Posted on: <span className='text-white'>01/12/2024</span></p>
                <p className='text-gray-300 text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum id error, ducimus maiores rerum harum, sed ab nesciunt doloribus, odio fugit voluptates quam! Nisi quo excepturi repellat saepe, nulla labore sunt tenetur natus autem. Nisi ducimus perferendis blanditiis similique ex sed fugit sunt voluptas maxime.</p>
                <div className="flex justify-between items-center py-4">
                    <div className="author flex justify-start items-center gap-2">
                        <Image src={"/user.jpg"} alt='author' width={70} height={70} className='rounded-full' />
                        <div className="flex flex-col">
                            <p className='text-xl text-white hover:underline'>Sarfaraz Unar</p>
                            <p className='text-gray-400 text-sm'>Full Stack Developer & CEO..</p>
                            <div className="flex justify-start  items-center gap-1">
                                <button className='bg-white px-3 text-black rounded-full'>Follow</button>
                                <button className='bg-white px-3 text-black rounded-full'>Visit Profile</button>
                            </div>
                        </div>
                    </div>
                    <button className='bg-gray-200 px-4 py-3 text-black border border-black hover:border-white hover:bg-transparent hover:text-white'>Read Now!</button>
                </div>
            </div>
        </div>
    )
}

export default MainPost
