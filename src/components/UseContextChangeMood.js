import React, { useContext } from 'react'
import { MoodContext } from '../App'

const moods = {
  happy: ':)',
  sad: ':('
}

const UseContext = () => {

  const mood = useContext(MoodContext)
  console.log(mood)
  
  return <div>
    {mood ? moods.happy : moods.sad}
  </div>

}
export default UseContext