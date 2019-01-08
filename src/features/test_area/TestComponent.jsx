import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { incrementCounter, decrementCounter } from './testActions'

class TestComponent extends Component {
  render() {
    const { incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h1>Test Component</h1>
        <h3>{this.props.mapStateKeyOne}</h3>
        <h3>{this.props.mapStateKeyThree.theData}</h3>
        <Button onClick={incrementCounter} color="green" content="increment"/>
        <Button onClick={decrementCounter} color="red" content="decrement"/>
      </div>
    )
  }
}

const mapState = (state) => ({
  mapStateKeyOne: state.propKeyfromRoot.theData,
  mapStateKeyTwo: state.propKeyfromRoot.yoyo,
  mapStateKeyThree: state.propKeyfromRoot
})

const actions = {
  incrementCounter,
  decrementCounter
}

export default connect(mapState, actions) (TestComponent)