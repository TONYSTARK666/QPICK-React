import { CardInCart } from "./CardInCart";
import styles from "./Cart.module.css";

export const Cart = (props) => {
    return (
        <div className={styles.cart}>
            <div className={`container ${styles.container}`}>
                {props.cart.length ? (
                    <>
                        <h2 className={styles.title}>Корзина</h2>
                        <div className={styles.flex}>
                            <div className={styles.cards}>
                                {props.cart.map((card) => (
                                    <CardInCart key={card.id} card={card} change={props.change} delete={props.delete} />
                                ))}
                            </div>
                            <div className={styles.summary}>
                                <div className={styles.main}>
                                    <p className={styles.text}>Итого</p>
                                    <p className={styles.sum}>₽ {props.sum.toLocaleString()}</p>
                                </div>
                                <button>Перейти к оформлению</button>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className={styles.empty}>Корзина пуста</div>
                )}
            </div>
        </div>
    );
};
