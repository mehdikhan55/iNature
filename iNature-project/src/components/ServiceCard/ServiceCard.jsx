import React from 'react'
import myStyles from './ServiceCard.module.css'
import { Tilt } from 'react-tilt'
// import { styles } from '../../styles'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../../utils/motion'

export default function ServiceCard({ service }) {
  return (
    <Tilt>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5, 0.75)}
      >

        <div
          options={{
            max: 25,
            scale:1,
            speed:450
          }}
          className={`${myStyles.card} cursor-pointer w-[35vw] min-h-[200px] max-h-[200px]  flex-col justify-center items-center border-[3px] border-emerald-400 `}>
          <h2 className={` border-b-2 border-emerald-400 text-2xl font-bold text-emerald-400`}>{service.title}</h2>
          <p className={`text-lg text-emerald-400 pt-4`}>{service.description}</p>
        </div>
      </motion.div>
    </Tilt>
  )
}

