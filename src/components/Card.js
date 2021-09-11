import React from "react";
import styles from "./Card.module.css";
import Button from "./UI/Button";

function Card(props) {
  const shineClass = props.featured ? styles.cardShined : styles.card;
  return (
    <div className={shineClass}>
      <div className={styles.logo}>
        <img src={props.logo} alt={`${props.company} Logo`} />
      </div>
      <h3>
        {props.name}
        {/* <span>New</span>
        <span>FEATURED</span> */}
      </h3>
      <h2>{props.position}</h2>
      <div className={styles.moreInfo}>
        <div className={styles.moreInfo__inner}>
          <span>1d ago</span>
          <span className={styles.dot}>.</span>
          <span>Full time</span>
          <span className={styles.dot}>.</span>
          <span>USA only</span>
        </div>
      </div>

      <div className={styles.tags}>
        {props.languages.map((lang) => {
          return <Button onClick={() => props.onClickTag(lang)}>{lang}</Button>;
        })}
      </div>
    </div>
  );
}

export default Card;
