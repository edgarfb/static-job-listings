import React from 'react'
import styles from './DisplayTags.module.css';

function DisplayTags(props) {
    const isEmpty = props.selectedTags.length === 0;
   
    return (
        <div className={`${isEmpty ? styles.displayTagsHide : styles.displayTags}`}>
           <div>{props.children} </div>
           {props.selectedTags.length > 0 && <div className={styles.clear} onClick={props.onClear}>clear</div>}
        </div>
    )
}

export default DisplayTags
