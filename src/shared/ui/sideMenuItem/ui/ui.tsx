import styles from "./ui.module.scss";

import {NavLink} from "react-router-dom";

export interface SideMenuItemPropsI {
    id: string,
    title: string,
    linksTitle: string[]//также нужны адреса куда ведут ссылки но уменя там везде #
}

export const SideMenuItem = (props: SideMenuItemPropsI) => {
    return (
        <div id={props.id} className={styles.itemWrapper}>
            <h2>{props.title}</h2>

            {props.linksTitle.map(item =>
                <NavLink key={item} to="#">{item}</NavLink>
            )}
        </div>
    )
}
