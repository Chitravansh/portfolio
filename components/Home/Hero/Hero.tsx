import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-white overflow-hidden flex-col'>
        <div className='relative z-10 flex flex-col items-center'>
        <Image src ="https://media.licdn.com/dms/image/v2/D5603AQG-hVnKnBqDrA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1700220179242?e=1770249600&v=beta&t=9VwrVA8yEMc-EecnclfZBVaXx3nxavUDHe0he9kRoyA" 
        alt ="heroimage"
        width = {150}
        height = {150}
        className='rounded-full border-8 border-[#0c0c48aa]'/>
        <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide'>
            Creating App & Web products, <br/> Brands,
            <span className="text-cyan-200"> and Experiences </span>
        </h1>
        <h2 className='mt-5 text-sm px-2 text-center sm:text-2xl md:text-3xl lg:text-4xl font-medium flex items-center '>
            Hi !, I'm Chitravansh - A passionate   //@57:17
        </h2>
        </div>

    </div>
  )
}

export default Hero
