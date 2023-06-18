import React from 'react'

const DivAdd = ({ id, removeEl }) => {
  return (
    <div
      onClick={() => removeEl(id)}
      style={{ cursor: 'pointer' }}
    >
      divAdd {id}
    </div>
  )
}

export default DivAdd