import React, { Component } from 'react';

class RowCounter extends Component {
  constructor (props) {
    super(props);

    this.state = { counter: 0 };
    this.increaseCounter = this.increaseCounter.bind(this)
  }

  componentDidMount () {
    this.initializeCounter()
  }

  initializeCounter () {
    this.setState({counter : 0})
  }


  increaseCounter() {
      let count = this.state.counter + 1
      this.setState({ counter: count })
  }

  render () {

    return (
      <div className="pl-4">
      <p className="pb-2">Row Counter</p>
      <button onClick={this.increaseCounter}
        className="btn shadow-md p-1">
        <span className="font-bold">{this.state.counter}</span>
        </button>
        </div>
    );
  }
  
}

export default RowCounter;

