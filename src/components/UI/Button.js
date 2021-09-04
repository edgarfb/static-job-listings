import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={styles.btn}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
}

export default Button;
