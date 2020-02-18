import React from 'react';

class CounterDisplay extends React.Component {
  constructor (props) {
    super(props);

  }
  componentDidMount () {

  }

  componentDidUpdate(prevProps, prevState, snapshot){


  }

  render() {
    return <h1>{this.props.value}</h1>
  }
}

export default CounterDisplay;