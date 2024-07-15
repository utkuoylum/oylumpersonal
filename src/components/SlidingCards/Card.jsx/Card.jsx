import clsx from "clsx";
import styles from "./Card.module.css";

export default function Card({title, description, image, selected, onClick}) {

    const classes = clsx(
        styles.card,
        selected && styles.active
    )

  return (
    <div className={classes} onClick={onClick} style={{backgroundImage: `url(${image})`}}>
      <div className={styles.row}>
        <div className={styles.icon}></div>
        <div className={styles.description}>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
