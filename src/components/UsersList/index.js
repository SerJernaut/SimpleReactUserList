import React, { Component } from 'react';
import { loadJson } from '../../utils';
import UserCard from '../UserCard';

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

        <li key={user.id}>{`${user.firstName} ${user.lastName}`}</li>

      );
    });
  };

  componentDidMount () {
      loadJson('/users.json')
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
      });
  }

  render () {
    const { isFetching, error } = this.state;
    if (error) {
      return <div>Error</div>;
    } else if (isFetching) {
      return <div>Loading...</div>;
    } else {
      return (

          <ol> {this.renderUsers()}
          </ol>


      );
    }
  }
}

export default UsersList;