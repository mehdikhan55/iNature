import React from 'react'
import styles from './ServiceCard.module.css'

export default function ServiceCard({service}) {
  return (
    <div>
        <div className={`${styles.card} w-[40vw] min-h-[200px]  flex-col justify-center items-center border border-emerald-400 border-[3px]`}>
            <h2 className={` border-b-2 border-emerald-400 text-2xl font-bold text-emerald-400`}>{service.title}</h2>
            <p className={`text-lg text-emerald-400 pt-4`}>{service.description}</p>
        </div>
    </div>
  )
}

