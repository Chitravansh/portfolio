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
import { IconBaseProps } from "react-icons";

const Resume = () => {

  const workExperience = [
  {
    role: "Full-Stack Developer",
    Icon: FaCodepen,
    description:
      "Building end-to-end web applications using React, Next.js, Node.js, and databases.",
  },
  {
    role: "Front-End Developer",
    Icon: FaReact,
    description:
      "Creating responsive and interactive user interfaces using React and Tailwind CSS.",
  },
  {
    role: "Backend Developer",
    Icon: BsDatabase,
    description:
      "Designing REST APIs, handling databases, and optimizing server-side performance.",
  },
  {
    role: "AI/ML Developer",
    Icon: BiBrain,
    description:
      "Working with machine learning models and integrating AI features into applications.",
  },
];

const education = [
  {
    role: "Dr. A.P.J Abdul Kalam Technical University",
    Icon: IoSchoolOutline,
    date: "Nov 2022 - June 2026",
    description:
      "Bachelor of Technology focusing on software engineering and computer science fundamentals.",
  },
  {
    role: "Senior Secondary School",
    Icon: FaSchool,
    date: "2020 - 2021",
    description:
      "Completed higher secondary education with a focus on science and mathematics.",
  },
  {
    role: "High School",
    Icon: FaSchool,
    date: "2018 - 2019",
    description:
      "Developed a strong academic foundation and analytical skills.",
  },
];



  return (
    <div className='pt-20 pb-16 '>
      <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-15'>
        {/**WORK PART */}
        <div>
          <h1 className='text-3xl sm:text-4xl font-bold text-white'>
            My Work <span className='text-cyan-200'> Experience</span>
          </h1>
          <div className='mt-10'
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center">
            {/* <ResumeCard Icon={FaCodepen} role="Full-Stack Developer" />
            <ResumeCard Icon={FaReact} role="Front-End Developer" />
            <ResumeCard Icon={BsDatabase} role="Backend Developer" />
            <ResumeCard Icon={BiBrain} role="AI/ML Developer" /> */}
            {workExperience.map((item,index)=>(
              <ResumeCard 
              key={index}
              Icon={item.Icon}
              role={item.role}
              description={item.description}
             />
            ))}


          </div>
        </div>
        {/**Eductaion Part*/}
        <div>
          <h1 className='text-3xl sm:text-4xl font-bold text-white'>
            My <span className='text-cyan-200'> Education</span>
          </h1>

          <div
            className='mt-10'
            data-aos="zoom-out"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            {/* <ResumeCard Icon={IoSchoolOutline} role="Dr. A.P.J Abdul Kalam Technical University" date="Nov 2022 - June 2026" />
            <ResumeCard Icon={FaSchool} role="Senior Secondary School" date="2020 - 2021" />
            <ResumeCard Icon={FaSchool} role="High School " date="2018 - 2019" /> */}

            {education.map((item,index)=>(
              <ResumeCard 
              key={index}
              Icon={item.Icon}
              role={item.role}
              description={item.description}
              date={item.date} />

            ))}


          </div>

        </div>
      </div>
    </div>
  )
}

export default Resume
