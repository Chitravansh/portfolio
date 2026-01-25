import React from 'react'

const Footer = () => {
    const date = new Date();
  return (
    <div className ="bg-blue-900/20 p-5 flex items-center justify-center">
        <h1 className='text-lg text-white/70 font-bold '> &copy; Chitravansh Mohan {date.getFullYear()}</h1>
      
    </div>
  )
}

export default Footer
