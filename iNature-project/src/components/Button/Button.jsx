import React from 'react'
import styles from './Button.module.css'

export default function Button({title}) {
  return (
    <div className={`${styles.button} flex`}>
      <p className={styles.buttonText}>{title}</p>
    </div>
  )
}
