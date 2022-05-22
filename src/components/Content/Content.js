import React from 'react'
import styles from './Content.module.css'
import Features from '../Features/Features'

const Content = () => {
  return ( <>
          <div loading="lazy" className={styles['content_hero']}>
            <p>Choose your trip</p>
          </div>
          <br/>
          
          <div className={styles['features']}>
            <Features textTitle={'Healthy'} items={[`🍋`, `🍎`, `🥑`]} clasx={'items-3'} />
            
            {/* <Features textTitle={'Hey Ho, lets go'} items={[`🍺`, `🍷`, `🍸`]} clasx={'items-3'}/> */}
            
            <Features textTitle={'Down the rabbit hole'} items={[`🍄`, `🍬`]} clasx={'items-2'}/>
          </div>
        </>
  )
  
}

export default Content