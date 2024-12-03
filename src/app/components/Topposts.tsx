import React from 'react'
import MainPost from './MainPost'
import BlogCard from './BlogCard'
import Subscriber from './Subscriber'

const Topposts = () => {
    return (
        <div className='grid grid-cols-6 gap-4 my-10 w-full px-10 items-start'>
            <div className='col-span-3 flex flex-col'>
                <MainPost />
                <Subscriber />
            </div>

            <div className="col-span-3 grid grid-cols-2 gap-2">
                <BlogCard authorShow={false} />
                <BlogCard authorShow={false} />
                <BlogCard authorShow={false} />
                <BlogCard authorShow={false} />
            </div>
        </div>
    )
}

export default Topposts
