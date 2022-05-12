import React from 'react'
import styles from './Content.module.css'
import Features from '../Features/Features'

const Content = () => {
  return ( <>
          <div className={styles['content_hero']}></div>
          <Features />
        </>
  )
  
}

export default Content