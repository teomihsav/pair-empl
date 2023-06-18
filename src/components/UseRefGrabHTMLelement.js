import React, { useRef, useEffect } from 'react'

const UseRefGrabHTMLelement = () => {

  const myBtn = useRef(null)
  const clickIt = () => myBtn.current.click()
  
  useEffect(() => {
    clickIt()
    console.log('useEffect Clicked...')
  }, [])


  return <div>
    <button ref={myBtn} onClick={() => console.log('Button Clicked...')}>Click</button>
  </div>
}

export default UseRefGrabHTMLelement