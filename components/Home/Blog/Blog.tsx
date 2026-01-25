import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div className='pt-32 pb-16'>
      <h1 className='text-center text-2xl 
      md:text-4xl xl:text-5xl 
      font-bold text-white'>
        My latest {" "}
        <span className='text-cyan-200'>Blogs</span>
      </h1>
      <div className='w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 items-center mt-16'>
        {/* Blog Card  */}
        <div
          data-aos="flip-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0">
          <BlogCard image="/images/project1.png"
            title="project1 is there " />
        </div>

        <div
          data-aos="flip-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100">
          <BlogCard image="/images/project2.png"
            title="project1 is there " />
        </div>

        <div
          data-aos="flip-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200">
          <BlogCard image="/images/project3.png"
            title="project1 is there " />
        </div>

      </div>

    </div>
  )
}

export default Blog
