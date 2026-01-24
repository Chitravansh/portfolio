import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import ClientReview from './ClientReview/ClientReview'

const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden flex-col">
     <Hero />
     <Services />
     <Resume />
     <Projects />
     <Skills />
     <ClientReview />
    </div>
  )
}

export default Home


//LocalHost:3000 
// http://localhost:3000


/*  For About page you neeed to go Localhost:3000/about
    Localhost:3000/about/team
    Localhost:3000/about/team/sajal
 */