import React, {Fragment} from 'react';
import UsersList from '../UsersList';
import Avatar from '../Avatar';
import styles from './UserCard.module.css';
import '../Avatar/Avatar.module.css';

function UserCard (props) {
  return  (
            <div className={styles.userCardContainer}>
                    <Avatar src={props.user.imageSrc} alt={`${props.user.firstName.substr(0, 1).toUpperCase()} ${props.user.lastName.substr(0, 1).toUpperCase()} `}/>
                <div className={styles.userCardContent}>
                    <h1>{`${props.user.firstName} ${props.user.lastName} `}</h1>
                </div>
            </div>
          )

}

export default UserCard;