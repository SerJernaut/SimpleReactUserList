import React, {Fragment} from 'react';
import UsersList from '../UsersList';
import Avatar from '../Avatar';
import styles from './UserCard.module.css';

function UserCard (props) {
  return  (
          <Fragment>
            <div className={styles.userCardContainer}>
            <div className={styles.userCardContent}></div></div>
         </Fragment>
          )

}

export default UserCard;