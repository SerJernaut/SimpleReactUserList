import React from 'react';

function UserListItem(props){

  //const {user} = props;
  const user = props.user;

  return (
    <li>
      {user.fullName + '' + user.id}
    </li>
  );
}

export default UserListItem;