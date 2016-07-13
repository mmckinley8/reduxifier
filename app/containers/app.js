import React, {Component}                              from 'react'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {Provider}                                      from 'react-redux'
import thunk                                           from 'redux-thunk'

import * as reducers from '../reducers'
import ReduxifierApp from './reduxifierApp'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const reducer                   = combineReducers(reducers)
const store                     = createStoreWithMiddleware(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxifierApp />
      </Provider>
    )
  }
}

export default App
