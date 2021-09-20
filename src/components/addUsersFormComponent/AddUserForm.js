import React, { useState, useRef } from "react";
import Button from "../UI/Button";

import Card from "../UI/Card";
import styles from "./AddUserForm.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUserForm = ({ onSaveUserData }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length > 0 && enteredAge.trim().length > 0) {
      if (+enteredAge > 0) {
        const user = {
          username: enteredName,
          age: +enteredAge,
          id: Math.random().toString(),
        };
        onSaveUserData(user);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
      } else {
        setError({
          title: "Invalid age",
          message: "Please enter a valid agre greater than zero",
        });
      }
    } else {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onClickConfirm={errorHandler} />}
      <Card className={styles.users__form}>
        <form>
          <div className={styles.users__controls}>
            <div className={styles.users__control}>
              <label htmlFor="username">Username:</label>
              <input
                id="username"
                type="text"
                ref={nameInputRef}
              ></input>
            </div>

            <div className={styles.users__control}>
              <label htmlFor="age">Age (years):</label>
              <input
                id="age"
                type="number"
                min="0"
                max="99"
                step="1"
                ref={ageInputRef}
              ></input>
            </div>
          </div>
        </form>
        <Button type={"submit"} onClick={addUserHandler}>
          Add User
        </Button>
      </Card>
    </div>
  );
};

export default AddUserForm;
