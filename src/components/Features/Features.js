import React from 'react'
import styles from './Features.module.css'

const Features = ({ clasx, items }) => {
  console.log(clasx);

  return (
    <div className={`${styles['content_features']} ${styles[clasx]}`}>
      {items.map((item) => {
        return (
          <div> <p> {item} </p> </div>
        )
      })}

    </div>
  )
}

export default Features