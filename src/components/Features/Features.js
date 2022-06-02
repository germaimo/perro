import React, { useState } from 'react';
import styles from './Features.module.css';

const Features = ({ textTitle, clasx, items }) => {

  const [highlight, setHighlight] = useState('');

  const handleHighlight = (id) => { setHighlight(id); };

  return (<>
    <h2 className={styles['features_h2']} >{textTitle}</h2>
    <div className={`${styles['content_features']} ${styles[clasx]}`}>

      {items.map((item, index) => {
        return (
          <article key={index} onClick={ ()=>{handleHighlight(item.id)} } className={ highlight === item.id ? styles['css-selector'] : ''} >
            <p className={ highlight === item.id ? styles['emoji-hide'] : ''}> {item.emoji} </p>
            <div className={ ` ${styles['data-text'] } ${ highlight === item.id ? styles['data-text-show'] : ''  } ` }> {item.text} </div> 
          </article>
        )
      })}

    </div>
  </>
  )
}

export default Features