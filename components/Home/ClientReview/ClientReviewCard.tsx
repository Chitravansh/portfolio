
import React from 'react'
import Image from 'next/image'

type Props = {
    name : string;
    image : string;
    role : string;
}

const ClientReviewCard = ({image , name , role} :Props) => {
  return (
    <div className='m-2'>
        <Image src = {image} alt = 'client' width={60} height={60} className='rounded-full' />
        <p className='mt-6 text-base text-gray-200 font-medium'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Quod at sed repudiandae incidunt unde consequuntur commodi 
             veritatis impedit culpa nulla, beatae perspiciatis neque 
             harum voluptatem architecto, magni tempore itaque enim!
        </p>
      
    </div>
  )
}

export default ClientReviewCard