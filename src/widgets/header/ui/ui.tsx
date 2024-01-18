import styles from "./ui.module.scss";

import {NavLink} from "react-router-dom";

import logo from "@/shared/assets/images/logo 1.svg"

export const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <img src={logo} alt={"logoimg"} className={styles.logoImg}/>

            <div className={styles.linkWrapper}>
                <NavLink to="#" className={styles.link}>О комплексе</NavLink>
                <NavLink to="#" className={styles.link}>О компании</NavLink>
                <NavLink to="#" className={styles.link}>Новости</NavLink>
                <NavLink to="#" className={styles.link}>Медиа-банк</NavLink>
                <NavLink to="#" className={styles.link}>Контакты</NavLink>
            </div>

            <div className={styles.featuresBlock}>
                <button className={styles.searchButton}>&#128269;</button>
                <button>&#127760; English</button>
            </div>
        </div>
    )
}
