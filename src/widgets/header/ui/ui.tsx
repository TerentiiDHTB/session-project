import styles from "./ui.module.scss";

import {NavLink} from "react-router-dom";

import logo from "@/shared/assets/images/logo 1.svg"

import {animated, useSpring} from "@react-spring/web";

export const Header = () => {
    const animation =  useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        },
        config:{duration:2000}
    });

    return (
        <animated.div style={animation}>
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
        </animated.div>
    )
}
