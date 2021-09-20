import React from "react";

import styles from "./Button.module.css";

const Button = ({ type, onClick, children }) => {
  
  return (
    <div className={styles['new-user']}>
      <button type={type || 'button'} onClick={onClick}>{children}</button>
    </div>
  );
};

export default Button;
