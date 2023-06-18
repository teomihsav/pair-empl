import React, { useReducer } from 'react'

const UseReducerExample = () => {

  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment': return { count: state.count + 1 }
      case 'decrement': return { count: state.count - 1}
      default: return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 })
  return (
    <div>
      Count: {state.count}
      <br />
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
    </div>
  )
}

export default UseReducerExample