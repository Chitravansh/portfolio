
// import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import ClientReview from './ClientReview/ClientReview'
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import AOSProvider from '../providers/AOSProvider'
//Animation Script import 
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 

const Home = () => {

  // useEffect(()=>{
  //   const initAOS = async () =>{
  //     await import("aos");
  //     AOS.init({
  //       duration: 1000,
  //       easing: "ease",
  //       once: true,
  //       anchorPlacement: "top-bottom",
  //     });
  //   };

  //   initAOS();
  // })


  return ( <AOSProvider>

    
    {/* // <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden flex-col"> */}
    <div className =  " relative flex flex-col text-white">
     {/* <Hero />
     <Services />
     <Resume />
     <Projects />
     <Skills />
     <ClientReview />
     <Blog />
     <Contact /> 
     <Footer />*/}
     <section id="home" className="scroll-mt-24">
  <Hero />
</section>

<section id="services" className="scroll-mt-24">
  <Services />
</section>

<section id="resume" className="scroll-mt-24">
  <Resume />
</section>

<section id="projects" className="scroll-mt-24">
  <Projects />
</section>

<section id="skills" className="scroll-mt-24">
  <Skills />
</section>

{/* <section id="testimonials" className="scroll-mt-24">
  <ClientReview />
</section> */}

<section id="blog" className="scroll-mt-24">
  <Blog />
</section>

<section id="contact" className="scroll-mt-24">
  <Contact />
</section>

<Footer />
 
    </div>
    </AOSProvider>
   
  )
}

export default Home


//LocalHost:3000 
// http://localhost:3000


/*  For About page you neeed to go Localhost:3000/about
    Localhost:3000/about/team
    Localhost:3000/about/team/sajal
 */