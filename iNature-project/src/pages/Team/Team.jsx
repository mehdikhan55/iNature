import React from 'react'
import { ourStyles } from '../../styles.js'
import styles from './Team.module.css'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from '../../utils/motion'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { mehdiProfile } from '../../assets/index.js';

import "react-vertical-timeline-component/style.min.css";




export default function Team({ active, setActive }) {
  React.useEffect(() => {
    setActive("Team");
  }, [])

  return (
    <section className='h-[100%] w-full bg-primaryColor flex flex-col pt-28 gap-y-20'>

      <div className=' flex gap-4 px-28'>

        <div className=' flex flex-1 justify-end items-center'>
          <div className='bg-green-500 h-full w-[60%] rounded-full border-3 border-black' />
        </div>

        <div className='flex flex-col'>
          <div >
            <h2 className={`${ourStyles.sectionHeadText}`}>Syed Zohaib Shah</h2>
            <h3 className={`text-3xl text-gray-200  `}>Team Mentor</h3>
          </div>

          <p className='mt-4 text-secondaryColor text-[15px] max-w-3xl leading-[30px]' >
            I'm a skilled software developer with experience in TypeScript and
            JavaScript, and expertise in frameworks like React, Node.js, and
            Three.js. I'm a quick learner and collaborate closely with clients to
            create efficient, scalable, and user-friendly solutions that solve
            real-world problems. Let's work together to bring your ideas to life!
          </p>
        </div>

      </div>

      <div>
        <motion.div variants={textVariant()}>
          <h2 className={`${ourStyles.sectionHeadText} text-center`}>
            Our Team
          </h2>
        </motion.div>

        <div className='mt-10 flex flex-col'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>

      </div>

    </section>
  )
}


const experiences = [
  {
    title: "Muhammad Mehdi Ali",
    role: "Web Design and Development",
    mainRole:"Team Lead",
    iconBg: "green",
    icon: '',
  },
  {
    title: "Muhammad Khizer Ali",
    role: "Structure",
    icon: '',
    iconBg: "#E6DEDD",

  },
  {
    title: "Attique Ur Rehman",
    role: "Graphics",
    iconBg: "#383E56",
    icon: '',

  },
  {
    title: "Hassan Javed",
    role: "Content",
    iconBg: "#E6DEDD",
    icon: '',

  },
  {
    title: "Tanveer ",
    role: "Content",
    iconBg: "#383E56",
    icon: '',

  },
];



const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: experience.iconBg }}
      date={experience.mainRole}
      icon={
        <div className='flex justify-center items-center w-full h-full'>

        </div>
      }
    >
      <div className='text-center'>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-gray-200 text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.role}
        </p>
      </div>

      <div className={` ml-32 h-[300px] w-[300px] rounded-full`}>
        <img src={mehdiProfile} alt="mehdiProfile" className='w-full h-full rounded-full'/>
      </div>
      {/* <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul> */}
    </VerticalTimelineElement>
  );
};