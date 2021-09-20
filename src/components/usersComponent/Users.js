import React from 'react';

import styles from './Users.module.css';
import UserItem from './UserItem';

const Users = ({ items, onRemoveSelectedUser }) => {
    if (items.length === 0) {
        return <h2 className={styles['users-list-fallback']}>No users</h2>
    }

    return (
        <ul className={styles['users-list']}>
            { items.map((user) => <UserItem key={user.id} user={user} onRemoveUser={onRemoveSelectedUser} /> ) }
        </ul>
    )
}

export default Users;
