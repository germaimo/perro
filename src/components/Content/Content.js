import React from 'react'
import styles from './Content.module.css'
import Features from '../Features/Features'

const Content = () => {
  return ( <>
          <div loading="lazy" className={styles['content_hero']}>
            <p>Choose your trip</p>
          </div>
          <br/>
          <h2>Healthy</h2>
          <Features items={[`🍋`, `🍎`, `🥑`]} clasx={'items-3'} />
          <br/>
          <br/>
          <h3>Hey Ho, lets go</h3>
          <Features items={[`🍺`, `🍷`, `🍸`]} clasx={'items-3'}/>
          <br/>
          <br/>
          <h4>Down the rabbit hole</h4>
          <Features items={[`🍄`, `🍬`]} clasx={'items-2'}/>
        </>
  )
  
}

export default Content