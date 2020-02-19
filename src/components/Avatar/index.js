import React from 'react';

class Avatar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: null
    }
  }

  onErrorHandler = (e) =>{
    this.setState({
      error: e.error,
                  })
  }

  render() {
    if(this.state.error){
      return;
    }
    else {
      return(
        <img className={this.props.className} src={this.props.src} alt={this.props.alt}/>
      )
    }
  }
}

export default Avatar;