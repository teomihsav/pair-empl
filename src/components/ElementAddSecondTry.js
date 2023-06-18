import React, { useState } from 'react'

export const Element = ({ id, remove }) => {
  return (
    <div onClick={() => remove(id)}> Element: {id}</div>
  )
}

const ElementAddSecondTry = () => {

  const [el, elSet] = useState([])

  const remove = (id) => {
    elSet(el.filter(el => el != id))
  }
  const add = () => {
    elSet(prev => [...prev, Math.random()])
  }
  return <div>
    <button onClick={add}> Click to add</button>
    {el.map(el => <Element key={el} id={el} remove={remove} />)}
  </div>
}

export default ElementAddSecondTry