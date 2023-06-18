import React, { useState, useEffect } from 'react'

let endVariable = 2;
for (let endVariable = 0; endVariable < 6; endVariable++) {
  console.log('hello', endVariable);
}
console.log(endVariable); // 3

const TestFunctions = () => {

  const [variable, variableSet] = useState()

  useEffect(() => {
    variableSet(endVariable)
  }, [endVariable])

  return (
    <div>{variable}</div>
  )
}

export default TestFunctions