import React from 'react'
import styles from './Features.module.css'

const Features = ({ textTitle,clasx, items }) => {
  console.log(clasx);

  return ( <>
  <h2>{textTitle}</h2>
      <div className={`${styles['content_features']} ${styles[clasx]}`}>
        
        {items.map((item) => {
          return (
            <div> <p> {item} </p> </div>
          )
        })}

      </div>
    </>
  )
}

export default Features