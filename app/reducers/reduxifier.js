import * as types from '../actions/actionTypes'

var INITIAL_STATE = {
  color: 'grey',
  count: 0,
  index: 0,
}

const colors = ['green', 'blue', 'red', 'grey', 'black']

function nextColor(colors, index) {
  console.log('index', index)
  if (index < colors.length) {
    return colors[index]
  }

  return colors[index - 5] // TODO
}

const reduxifier = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    case types.RESET:
      return {
        ...state,
        color: 'grey',
        count: 0
      }
    case types.CHANGE_COLOR:
      const color = nextColor(colors, state.index)
      const index = state.index + 1

      return {
        ...state,
        color: color,
        index: index,
      }
    default:
      return state
  }
}

export default reduxifier
