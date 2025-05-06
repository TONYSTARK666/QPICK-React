import styles from "./Card.module.css";
import { MdOutlineStarPurple500 } from "react-icons/md";

export const Card = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.card.img} alt={props.card.title}></img>
            <div className={styles.content}>
                <h2 className={styles.title}>{props.card.title}</h2>
                <p className={styles.price}>
                    {props.card.new_price} ₽{props.card.old_price && <span className={styles.sale}>{props.card.old_price} ₽</span>}
                </p>
                <p className={styles.rate}>
                    <MdOutlineStarPurple500 className={styles.star} />
                    {props.card.rate}
                </p>
                <button className={styles.buy} onClick={() => props.toCart(props.card)}>
                    Купить
                </button>
            </div>
        </div>
    );
};
