import React, {Component, PropTypes}                from 'react'
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native'

import Random from './random'

class Counter extends Component {
  static PropTypes = {
    changeColor: PropTypes.func.isRequired,
    color      : PropTypes.string.isRequired,
    counter    : PropTypes.object.isRequired,
    decrement  : PropTypes.func.isRequired,
    increment  : PropTypes.func.isRequired,
    reset      : PropTypes.func.isRequired,
  }

  render() {
    const {changeColor, color, counter, decrement, increment, reset} = this.props

    return (
      <View style={{alignItems: 'center', backgroundColor: color, flex: 1, justifyContent: 'center'}}>
        <Text>{counter}</Text>
        <TouchableHighlight onPress={increment} style={styles.button}>
          <Text>Add</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={decrement} style={styles.button}>
          <Text>Subtract</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={reset} style={styles.button}>
          <Text>Reset</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={changeColor} style={styles.button}>
          <Text>Change Color</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={handleNavigateToRandom} style={styles.button}>
          <Text>Move Forward</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems     : 'center',
    backgroundColor: 'lightgray',
    height         : 40,
    justifyContent : 'center',
    margin         : 3,
    padding        : 10,
    width          : 100,
  },
})

export default Counter
