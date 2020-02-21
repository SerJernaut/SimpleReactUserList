import React from 'react';
import styles from './Avatar.module.css'
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
        <div className={styles.avatarContainer}><img className={this.props.className} src={this.props.src} alt={this.props.alt}/></div>
      )
    }
  }
}

export default Avatar;