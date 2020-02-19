import React, { Component } from 'react';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      users: [],
      isFetching: true,
      error: null,
    };
  }

  componentDidMount () {
    fetch('/users.json')
      .then(response =>
              response.json()
      )
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
    const { isFetching, error, users } = this.state;
    if (error) {
      return <div>
        Error
      </div>;
    } else if (isFetching) {
      return <div>Loading...</div>;
    } else {
      return (<ol>
        {
          users.map(user => {
            return (
              <li key={user.id}>{`${user.firstName} ${user.lastName}`}</li>
            );
          })
        }
      </ol>);
    }
  }

}

export default App;