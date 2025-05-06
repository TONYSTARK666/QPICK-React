import { NavLink } from "react-router";
import styles from "./Footer.module.css";
import { CiGlobe } from "react-icons/ci";
import { SlSocialVkontakte } from "react-icons/sl";
import { RiTelegramLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <h2 className={`logo ${styles.logo}`}>QPICK</h2>
                <nav>
                    <NavLink to="/likes">Избранное</NavLink>
                    <NavLink to="/cart">Корзина</NavLink>
                    <NavLink to="/contacts">Контакты</NavLink>
                    <NavLink to="/conditions">Условия сервиса</NavLink>
                    <div className={styles.languages}>
                        <CiGlobe className={styles.globe} />
                        <a className={styles.active}>Рус</a>
                        <a>Eng</a>
                    </div>
                </nav>
                <div className={styles.socials}>
                    <a href="https://vk.com" target="_blank">
                        <SlSocialVkontakte className={styles.icon} />
                    </a>
                    <a href="https://web.telegram.org/" target="_blank">
                        <RiTelegramLine className={styles.icon} />
                    </a>
                    <a href="https://web.whatsapp.com/" target="_blank">
                        <FaWhatsapp className={styles.icon} />
                    </a>
                </div>
            </div>
        </footer>
    );
};
