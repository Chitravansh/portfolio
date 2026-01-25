
import React from 'react'
import BlogCard from './BlogCard'
import { DevToBlog } from "./types";

async function getBlogs(): Promise<DevToBlog[]> {
  const res = await fetch(
    `https://dev.to/api/articles?username=${process.env.DEV_TO_USERNAME}&per_page=3`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) return [];
  return res.json();
}

const Blog = async () => {

  const blogs = await getBlogs();
  return (
    <div className='pt-32 pb-16' id="blog">
      <h1 className='text-center text-2xl 
      md:text-4xl xl:text-5xl 
      font-bold text-white'>
        My latest {" "}
        <span className='text-cyan-200'>Blogs</span>
      </h1>
      <div className='w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 items-center mt-16'>

        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            image={blog.cover_image && blog.cover_image.trim() !== ""
              ? blog.cover_image
              : null}
            title={blog.title}
            description={blog.description}
            date={blog.readable_publish_date}
            readTime={blog.reading_time_minutes}
            reactions={blog.positive_reactions_count}
            tags={blog.tag_list}
            url={blog.url}
          />
        ))}



        {/* {blogs.map((blog,index)=>(
          <div 
          key={blog.id}
          // data-aos="flip-right"
          // data-aos-delay={index*100}
          >

            <BlogCard image = 
            {
              blog.cover_image ?? "/images/project1.png"}
              title={blog.title}
              description={blog.description}
              date={blog.readable_publish_date}
              readTime={blog.reading_time_minutes}
              reactions={blog.positive_reactions_count}
              tags={blog.tag_list}
              url={blog.url}
            
            />
          </div>

        ))} */}
        {/* Blog Card  */}
        {/* <div
          data-aos="flip-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0">
          <BlogCard image="/images/project1.png"
          title="project1 is there " description={''} date={''} readTime={0} reactions={0} tags={[]} url={''} />
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
        </div> */}

      </div>

    </div>
  )
}

export default Blog
