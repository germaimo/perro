import React from 'react'
import styles from './Content.module.css'
import img from '../../assets/pawel-czerwinski-8uZPynIu-rQ-unsplash.jpg'

const Content = () => {
  return (<div className={styles['content_hero']}>

          <img src={img} alt='hero'/>
        </div>
        // <ul className={styles['text_content']}>
        //     <li>BULLDOG</li>
        //     <li>PERRIUS DELUXUS</li>
        //     <li>DANES</li>
        //     <li>DOGO</li>
        // </ul> 
  )
  
}

export default Content