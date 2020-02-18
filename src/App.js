import React, {Fragment} from 'react';
import CounterDisplay from './components/CounterDisplay';

class App extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      value: 0,
      step: 1,
    }
  }
  componentDidMount () {

  }

  componentDidUpdate(prevProps, prevState, snapshot){


  }

  incrementCounter = () => {
    this.setState({
                    value: this.state.value + this.state.step,
                  })
  }

  decrementCounter = () => {
    this.setState({
                    value: this.state.value - this.state.step,
                  })
  }

  handleChangeInputValue = newStep => {
    if(!isNaN(newStep)){
      this.setState(
        {
          step: newStep,
        }
      )
    }
  }

  render() {
    return (
      <Fragment>
        <CounterDisplay value={this.state.value}/>
      <button onClick={this.incrementCounter}>+</button>
        <button onClick={this.decrementCounter}>-</button>
        <input type="number" value={this.state.step} onChange={(e)=>{
          this.handleChangeInputValue(Number(e.currentTarget.value))
        }} />
      </Fragment>

    );
  }
}

export default App;