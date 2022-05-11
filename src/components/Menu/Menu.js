import React from 'react'
import styles from './Menu.module.css'

const Menu = () => {
  return (
    <ul className={styles['menu']}>
        <li>Shop</li>
        <li>News</li>
        <li>About us</li>
        <li>Contact</li>
    </ul>
  )
}

export default Menu