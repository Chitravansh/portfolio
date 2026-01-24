"use client"
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from './ClientReviewCard';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 3,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 764 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
    }
};

const ClientReview = () => {
    return (
        <div>
            <h1 className='text-center text-2xl 
      md:text-4xl xl:text-5xl 
      font-bold text-white'>
                Kind Words from satisfied <br /> {" "}
                <span className='text-cyan-200'>clients</span>
            </h1>
            <div className="mt-10 max-w-6xl mx-auto px-4">
            <Carousel

                showDots={false}
                responsive={responsive}
                //   ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}

            >

                <ClientReviewCard image="/images/project1.png"
                    name="Project 1"
                    role="Ceo, Lanscape" />

                <ClientReviewCard image="/images/project2.png"
                    name="Project 1"
                    role="Ceo, Lanscape" />

                <ClientReviewCard image="/images/project3.png"
                    name="Project 1"
                    role="Ceo, Lanscape" />

            </Carousel>
           </div>

        </div>
    )
}

export default ClientReview
