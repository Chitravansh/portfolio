import React from 'react'
import Image from "next/image"

type Props = {
    image: string;
    title: string;
}

const BlogCard = ({ image, title }: Props) => {
    return (
        <div>
            <Image src={image} alt="blog" 
            height={500} 
            width={500} 
            className="object-cover" />

            <p className='mt-4 text-gray-500 font-medium text-base sm:text-lg'>
                 5 July
             </p>

             {/**Tags */}

             <h1 className='mt-5 text-lg sm:text-xl 
             font-bold text-white 
             hover:underline
           hover:text-cyan-300
             cursor-pointer 
             transition-all duration-300'>{title}</h1>

             <div className='mt-4 flex gap-2 items-center'>

             <p className='px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base fonr-bold rounded-full '>
                React
             </p>

            <p className='px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base fonr-bold rounded-full '>
                Next JS
             </p>

            <p className='px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base fonr-bold rounded-full '>
                TailWind CSS
             </p>

             </div>

        </div>

    )
}

export default BlogCard
