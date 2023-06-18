import React from 'react'
import Chevron from '../atoms_components/Chevron'
import {
  FaChevronDown
} from 'react-icons/fa'

import styles from './MenuDisplay.module.css'

const MenuDisplay = ({ menu }) => {
  // console.log(Object.values(menu))
  return (
    <div className={styles.menu}>
      {Object.keys(menu)}
      <FaChevronDown style={{ color: 'var(--secondary-color)', fontSize: '0.7rem', marginLeft: '5px' }} />
       {
        Object.values(menu).map(el => {
          return Object.entries(el[0]).map(el => <div key={el}>{el}</div> )
          // console.log(Object.entries(el[1]))
        } )
      }
      {/*
    */}
    </div>
  )
}

export default MenuDisplay