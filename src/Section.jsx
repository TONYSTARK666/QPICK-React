import { Card } from "./Card";
import styles from "./Section.module.css";

export const Section = (props) => {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>{props.title}</h2>
                <div className={styles.cards}>
                    {props.headphones.map((card) => {
                        if (props.wire === card.wire) {
                            return <Card key={card.id} card={card} toCart={props.toCart} toLikes={props.toLikes} />;
                        }
                    })}
                </div>
            </div>
        </section>
    );
};
