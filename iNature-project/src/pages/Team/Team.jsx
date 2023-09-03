import React from 'react'
import { ourStyles } from '../../styles.js'
import styles from './Team.module.css'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from '../../utils/motion'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { khizerProfile, mehdiProfile } from '../../assets/index.js';
import { attiqueProfile } from '../../assets/index.js';

import "react-vertical-timeline-component/style.min.css";




export default function Team({ active, setActive }) {
  React.useEffect(() => {
    setActive("Team");
  }, [])

  return (
    <section className='h-[100%] w-full bg-primaryColor flex flex-col pt-28 gap-y-20'>

      <div className='align-self-center'>
        <div className=' flex gap-4'>

          <div className=' flex flex-1 justify-end items-center'>
            <div className='bg-green-500 h-[270px] w-[270px] rounded-full border-3 border-black' />
          </div>

          <div className='flex flex-col mt-3'>
            <div >
              <h2 className={`${ourStyles.sectionHeadText}`}>Syed Zohaib Shah</h2>
              <h3 className={`text-3xl text-gray-200  `}>Team Mentor</h3>
            </div>

            <p className='mt-4 text-secondaryColor text-[15px] max-w-3xl leading-[30px]' >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique minima, ea blanditiis quia, magnam neque architecto soluta harum porro illo nisi ab veniam temporibus libero quis! Eum eveniet odio accusamus consequuntur voluptatum velit cupiditate qui quae cupiditate dolor? Doloribus pariatur ab deserunt
            </p>
          </div>
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
    mainRole: "Team Lead",
    iconBg: "green",
    icon: mehdiProfile,
  },
  {
    title: "Muhammad Khizer Ali",
    role: "Structure",
    icon: khizerProfile,
    iconBg: "#E6DEDD",

  },
  {
    title: "Attique Ur Rehman",
    role: "Graphics",
    iconBg: "#383E56",
    icon: attiqueProfile,

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
      dateStyle={{ color: "white" }}
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

      <div className={` ml-20 h-[300px] w-[300px] rounded-full mt-3`}>
        <img src={experience.icon} alt="mehdiProfile" className='w-full h-full rounded-full object-cover' />
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