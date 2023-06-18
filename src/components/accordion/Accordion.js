import React, { useState, useRef } from 'react'

import Chevron from '../atoms_components/Chevron'
import './Accordion.css'

const Accordion = ({ title, content }) => {

  const refContent = useRef(null)
  const [active, activeSet] = useState(false)
  const [height, heightSet] = useState('0px')

  const toggleAccordion = () => {
    activeSet(!active)
    heightSet(active ? '0px' : `${refContent.current.scrollHeight}px`)
    console.log(refContent.current.scrollHeight)
  }

  return (
    <div className='accordion__section'>
    
      <button className={`accordion ${active}`} onClick={toggleAccordion}>
        <p className='accordion__title'>{title}</p>

        <Chevron
          className={active ? 'accordion__icon rotate' : 'accordion__icon'}
          width={24}
          height={24}
          fill={'#777'}
        />

      </button>

      <div ref={refContent} style={{ maxHeight: `${height}` }} className='accordion__content'>
        <div
          className='accordion__text'
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

    </div>
  )
}

export default Accordion