import React , { useState } from 'react'
import styles from './Footer.module.css'
import dancing from '../../assets/dancing.svg';
import contact from '../../assets/reach-out.svg';
import Form from '../Form/Form';

const Footer = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => { setOpen(!open);  };

  return ( <div className={styles['footer']}>
      <img src={contact} className={styles['img_reachOut']} alt='person resting using phone' />
        
        <div className={styles['more']}>  
          <h5>Reach out</h5>
          <p>We apply pleasure qualities to non-pleasure moments.</p>
          <div><button onClick={handleOpen}>Contact us</button></div>
        </div>
      
      <img src={dancing} className={styles['img_dancing']} alt='people dancing' />
      <div className={styles['text_footer']}> a product by perro industries © 2022 All rigths reserved</div>


      <Form isOpen={open} handleOpen={handleOpen} />
  </div> 
  )
}

export default Footer