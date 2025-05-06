import { Link } from "react-router";
import styles from "./Header.module.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

export const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link to="/" className={styles.logo}>
                    <h1 className="logo">QPICK</h1>
                </Link>
                <Link to="/likes" className={styles.link}>
                    <IoMdHeartEmpty className={styles.like} />
                    {props.likes !== 0 ? <span className={styles.circle}>{props.likes}</span> : ""}
                </Link>
                <Link to="/cart" className={styles.link}>
                    <IoCartOutline className={styles.cart} />
                    {props.cart !== 0 ? <span className={styles.circle}>{props.cart}</span> : ""}
                </Link>
            </div>
        </header>
    );
};
