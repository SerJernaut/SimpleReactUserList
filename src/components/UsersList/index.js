import React, { Component } from 'react';
import { loadJson } from '../../utils';
import UserCard from '../UserCard';
import Spinner from "../Spinner";
import './UsersList.module.css';
import styles from '../Spinner/Spinner.module.css'

class UsersList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
      isFetching: false,
      error: null,
    };
  }

  renderUsers = () => {
    const { users } = this.state;
    return users.map((user) => {
      return (

        <li key={user.id} id={user.id}>
            <UserCard user={user}/>
        </li>

      );
    });
  };

    renderSpinner = () =>{
        const {isFetching} = this.state;
        if(isFetching){
            return <Spinner/>
        }
    }

  componentDidMount () {
          this.setState({
              isFetching: true,
          });
          setTimeout(  ()=>{loadJson('/users.json')
              .then(users => {
                  this.setState({
                      isFetching: false,
                      users
                  });
              })
              .catch(err => {
                  this.setState({
                      isFetching: false,
                      error: err,
                  });
              })}, 5000)

  }

  render () {
    const { isFetching, error } = this.state;
    if (error) {
      return <div>Error</div>;
    } else if (isFetching) {
      return <div className={styles.loadingUsers}>Подождите, пользователи загружаются <br/>
      {this.renderSpinner()}</div>
    } else {
      return (
        <ol>
            {this.renderUsers()}
        </ol>



      );
    }
  }
}

export default UsersList;