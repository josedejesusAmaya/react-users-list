import React from "react";

import Card from "../UI/Card";
import styles from "./UserItem.module.css";

const UserItem = ({ user, onRemoveUser }) => {

  const removeUserHandler = () => {
    onRemoveUser(user.id);
  }

  return (
    <li>
      <Card className={styles.user__item}>
        <div onClick={removeUserHandler}>{user.username} {user.age} years old</div>
      </Card>
    </li>
  );
};

export default UserItem;
