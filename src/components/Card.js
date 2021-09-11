import React from "react";
import styles from "./Card.module.css";
import Button from "./UI/Button";

function Card(props) {
  const featuredClass = props.featured ? styles.cardFeatured : styles.card;
  return (
    <div className={featuredClass}>
      <div className={styles.logo}>
        <img src={props.logo} alt={`${props.company} Logo`} />
      </div>
      <aside className={styles.mainTitle}>
        <h3>
          {props.name}
          {props.new && <span className={styles.titleTag}>New!</span>}
          {props.featured && <span className={styles.titleTag}>FEATURED</span>}
        </h3>
        <h2>{props.position}</h2>
        <div className={styles.moreInfo}>
          <div className={styles.moreInfo__inner}>
            <span>{props.postedAt}</span>
            <span className={styles.dot}>.</span>
            <span>{props.contract}</span>
            <span className={styles.dot}>.</span>
            <span>{props.location}</span>
          </div>
        </div>
      </aside>

      <div className={styles.tags}>
        {props.languages.map((lang) => {
          return <Button onClick={() => props.onClickTag(lang)}>{lang}</Button>;
        })}
      </div>
    </div>
  );
}

export default Card;
