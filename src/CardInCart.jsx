import styles from "./CardInCart.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";

export const CardInCart = (props) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <img src={props.card.img} alt={props.card.title} />
                <div className={styles.desc}>
                    <h3 className={styles.title}>{props.card.title}</h3>
                    <p className={styles.price}>{props.card.new_price.toLocaleString()} ₽</p>
                </div>
            </div>
            <button className={styles.delete} onClick={() => props.delete(props.card)}>
                <FaRegTrashAlt className={styles.delete_icon} />
            </button>
            <div className={styles.change}>
                <button className={styles.less} onClick={() => props.change(props.card, false)}>
                    <AiFillMinusCircle />
                </button>
                <p>{props.card.count}</p>
                <button className={styles.more} onClick={() => props.change(props.card, true)}>
                    <AiFillPlusCircle />
                </button>
            </div>
            <p className={styles.summary}>{(props.card.count * props.card.new_price).toLocaleString()} ₽</p>
        </div>
    );
};
