'use-strict'

import React, {Component}     from 'react'
import {bindActionCreators}   from 'redux'
import Counter                from '../components/counter'
import * as reduxifierActions from '../actions/reduxifierActions'
import {connect}              from 'react-redux'

class ReduxifierApp extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {actions, state} = this.props

    return <Counter counter={state.count} color={state.color} {...actions} />
  }
}

export default connect(state => ({
    state: state.reduxifier
  }),
  (dispatch) => ({
    actions: bindActionCreators(reduxifierActions, dispatch)
  })
)(ReduxifierApp);
