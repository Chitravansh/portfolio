import React from 'react'
import Image from "next/image"

type Props = {
    image?: string|null;
    title: string;
    description: string;
    date: string;
    readTime: number;
    reactions: number;
    tags: string[];
    url: string;
}

const BlogCard = ({
    image,
    title,
    description,
    date,
    readTime,
    reactions,
    tags,
    url }: Props) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className='block group'
        >
            <div>
               {image && ( <Image
                    src={image}
                    alt={title}
                    height={500}
                    width={500}
                    className="object-cover rounded-xl" />)}

                {/* <p className='mt-4 text-gray-500 font-medium text-base sm:text-lg'>
                    5 July
                </p> */}

                {/* Meta Info */}
                <div className='mt-4 flex items-center gap-4 text-gray-400 text-sm'>
                   <span>{date}</span>
                   <span>{readTime}</span>
                   <span>❤️ {reactions}</span>
                </div>

                {/* Title */}
                <h1 
                className='mt-4 text-lg sm:text-xl
                font-bold text-white 
                group-hover:underline
                group-hover:text-cyan-300
                transition-all duration-300'>
                    {title}
                </h1>

                {/* *Tags

                <h1 className='mt-5 text-lg sm:text-xl 
             font-bold text-white 
             hover:underline
           hover:text-cyan-300
             cursor-pointer 
             transition-all duration-300'>{title}</h1> */}

             {/* Description */}
             <p className='mt-2 text-gray-400 line-clamp-2'>
                {description}
             </p>

             {/* Tags */}
             <div className='mt-4 flex gap-2 flex-wrap'>
             
             {tags.map((tag)=>(
               <span 
               key = {tag}
               className='px-3 py-1.5 bg-blue-950 text-white text-xs sm:text-sm font-medium rounded-full'>
                #{tag}
               </span>
             ))}

             </div>



                {/* <div className='mt-4 flex gap-2 items-center'>

                    <p className='px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base fonr-bold rounded-full '>
                        React
                    </p>

                    <p className='px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base fonr-bold rounded-full '>
                        Next JS
                    </p>

                    <p className='px-4 py-1.5 bg-blue-950 text-white text-sm sm:text-base fonr-bold rounded-full '>
                        TailWind CSS
                    </p>

                </div> */}

            </div>
        </a>

    )
}

export default BlogCard
