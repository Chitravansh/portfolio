import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className='pt-16 pb-16'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
        A small selection of recent <br /> {" "}
        <span className='text-cyan-300'>projects</span>
      </h1>
      <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
        
        {/**1st Project */}
        <div>
          {/* <Image src= "" ></Image> */}
          <Image src="/images/project1.png" 
            alt='img' 
            width={800} 
            height={650} 
            className='rounded-lg' />
          <h1 className='mt-4 text-xl sm:text-2xl font-semibold  text-white' >
            Medi-Translate App 
            </h1>
            <h1 className='pt-2 font-medium text-white/80'>
              NextJs , AI
            </h1>
        </div>

        {/**2nd Project */}

          <div>
          {/* <Image src= "" ></Image> */}
          <Image src="/images/project2.png" 
            alt='img' 
            width={800} 
            height={650} 
            className='rounded-lg' />
          <h1 className='mt-4 text-xl sm:text-2xl font-semibold  text-white' >
            Hire Trainer 
            </h1>
            <h1 className='pt-2 font-medium text-white/80'>
              NextJs, Node
            </h1>
        </div>

        {/**3rd Project */}
                <div>
          {/* <Image src= "" ></Image> */}
          <Image src="/images/project3.png" 
            alt='img' 
            width={800} 
            height={650} 
            className='rounded-lg' />
          <h1 className='mt-4 text-xl sm:text-2xl font-semibold  text-white' >
            Live News Portal
            </h1>
            <h1 className='pt-2 font-medium text-white/80'>
              NextJs , Node , Open API
            </h1>
        </div>

      </div>

    </div>
  )
}

export default Projects
