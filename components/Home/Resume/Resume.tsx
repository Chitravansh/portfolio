import { FaBrain } from "react-icons/fa"; 
import { BiBrain } from "react-icons/bi"; 
import { FaSchool } from "react-icons/fa"; 
import { IoSchoolOutline } from "react-icons/io5"; 
import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCodepen, FaReact } from 'react-icons/fa'
import { BsDatabase } from 'react-icons/bs'
import { BiBadge } from 'react-icons/bi'
import { IoIosSchool } from 'react-icons/io'

const Resume = () => {
  return (
    <div className='pt-20 pb-16 '>
      <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-15'>
        {/**WORK PART */}
        <div>
          <h1 className='text-3xl sm:text-4xl font-bold text-white'>
            My Work <span className='text-cyan-200'> Experience</span>
          </h1>
          <div className='mt-10'>
            <ResumeCard Icon={FaCodepen} role="Full-Stack Developer" />
            <ResumeCard Icon={FaReact} role="Front-End Developer" />
            <ResumeCard Icon={BsDatabase} role="Backend Developer" />
             <ResumeCard Icon={BiBrain} role="AI/ML Developer" />
           

          </div>
        </div>
        {/**Eductaion Part*/}
        <div>
          <h1 className='text-3xl sm:text-4xl font-bold text-white'>
            My <span className='text-cyan-200'> Education</span>
          </h1>

          <div className='mt-10'>
            <ResumeCard Icon={IoSchoolOutline} role="Dr. A.P.J Abdul Kalam Technical University" date ="Nov 2022 - June 2026"/>
            <ResumeCard Icon={FaSchool} role="Senior Secondary School" date ="2020 - 2021"  />
            <ResumeCard Icon={FaSchool} role="High School " date = "2018 - 2019" />
           

          </div>

        </div>
      </div>
    </div>
  )
}

export default Resume
