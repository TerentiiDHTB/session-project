import styles from "./ui.module.scss";
import {NavLink} from "react-router-dom";

export interface MenuItemPropsI{
    id: string,
    title: string,
    color: string
}

export const MenuItem = (props: MenuItemPropsI) => {
    return (
        <div id={props.id} className={styles.menuItemWrapper} style={{backgroundColor: props.color}}>
            <h4>
                {props.title}
            </h4>

            <NavLink to="#">Подробнее &#8594;</NavLink>
        </div>
    )
}
