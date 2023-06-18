import React from 'react'

import { useSelector } from 'react-redux'
import { store } from './store'
import { ACTIONS } from './store'

let i = 0
const ReduxExample = () => {
  const addTodos = () => {
    store.dispatch({ type: ACTIONS.ADD_TODOS, payload: 'Test value two' + i++})
  }
  const delTodos = () => {
    store.dispatch({ type: ACTIONS.DELETE_TODOS })
  }

  const res = useSelector(state => state)

  return (
    <div>
      <button onClick={() => addTodos()}> Redux test</button>
      <button onClick={() => delTodos()}> Delete todos</button>
      <br/>
      {res}
    </div>
  )
}

export default ReduxExample