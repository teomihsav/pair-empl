import React from 'react'

const FocusableInput = (props) => {
  // Write your code here
  { return props.shouldFocus ? <input autoFocus /> : <input /> }
  
};



const OnFocusInput = () => {
  return (
    <div>
      <FocusableInput shouldFocus={true} />
    </div>
  )
}

export default OnFocusInput