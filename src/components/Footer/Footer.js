import React from 'react'
import styles from './Footer.module.css'
import dancing from '../../assets/dancing.svg';
import contact from '../../assets/reach-out.svg'

const Footer = () => {
  return ( <div>
      <img src={contact} styles={'width: 30%'} alt='person resting using phone' />
        
        <div className={styles['more']}>  
          <h5>Reach out</h5>
          <p>We apply pleasure qualities to non-pleasure moments.</p>
          <div><button>More info</button></div>
        </div>
      
      <img src={dancing} styles={'width: 70%'} alt='people dancing' />
      <div className={styles['text_footer']}> a product by perro industries © 2022 All rigths reserved</div>
  </div> )
}

export default Footer