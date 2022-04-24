import React, { useState } from "react";
import styles from "./Button.module.css"; // Import css modules stylesheet as styles

const Button = (props) => {
  return (
    <div>
      <button className={styles.btn} onClick={props.onClickHandle}>
        {props.btnText}
      </button>
    </div>
  );
};

export default Button;
