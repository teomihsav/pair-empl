import React, { Component } from 'react'

class Message extends React.Component {
  state = { click: false }
  render() {

    return (<React.Fragment>
      <a onClick={() => this.setState(state => ({ click: !state.click }))} href="#">Want to buy a new car?</a>
      {this.state.click ? <p>Call +11 22 33 44 now!</p> : null}
    </React.Fragment>
    )
  }
}

export default class CompClass extends Component {
  render() {
    return (
      <Message />
    )
  }
}