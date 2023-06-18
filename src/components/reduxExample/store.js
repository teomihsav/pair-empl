import { createStore } from 'redux'

export const ACTIONS = {
  ADD_TODOS: 'add',
  DELETE_TODOS: 'del'
}

const todos = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODOS: return (state, [...state, action.payload])
    case ACTIONS.DELETE_TODOS: return (state, [state.pop()])
    default: return state
  }
}

export const store = createStore(todos, ['Test value'])
