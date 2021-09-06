import React from 'react';
import styles from './ButtonClose.module.css';

const ButtonClose = (props) => {
    return (
        <div className={styles.btnClose}>
            <span>{props.label}</span>
            <button className={styles.btn} onClick={props.onClick}>X</button>
        </div>
    )
}

export default ButtonClose
