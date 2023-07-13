import React from 'react'
import styles from './Home.module.css'
import Pad from '../Pad/Pad'

const home = () => {
  return (
    <div className={styles.home}>
      <Pad />
    </div>
  )
}

export default home