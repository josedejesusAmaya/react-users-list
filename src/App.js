import React, {useState} from 'react';

import styles from './App.module.css';
import AddUserForm from './components/addUsersFormComponent/AddUserForm';
import Users from './components/usersComponent/Users';

const DUMMY_USERS = [
  {
    id: 'a1',
    username: 'Pepe',
    age: 26
  },
  {
    id: 'a2',
    username: 'Emi',
    age: 11
  }
];

function App() {
  const [usersList, setUsersList] = useState(DUMMY_USERS);

  const addUserHandler = (newUser) => {
    setUsersList((prevList) => {
      return [newUser, ...prevList];
    });
  };

  const removeUserHandler = (userId) => {
    setUsersList((prevList) => {
      return prevList.filter((user) => user.id !== userId);
    });
  };

  return (
    <div className={styles.app}>
      <AddUserForm onSaveUserData={addUserHandler} />
      <Users items={usersList} onRemoveSelectedUser={removeUserHandler} />
    </div>
  );
}

export default App;
