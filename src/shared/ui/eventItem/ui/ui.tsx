import styles from "./ui.module.scss";

export interface EventItemPropsI{
    id: string,
    imgSrc: string,
    date: string,
    eventTitle: string,
    eventDescription: string
}

export const EventItem = (props: EventItemPropsI) => {
    return (
        <div id={props.id} className={styles.eventItemWrapper}>
            <img src={props.imgSrc} alt="eventimg" className={styles.eventImg}/>
            <span className={styles.eventDate}>{props.date}</span>
            <h4 className={styles.eventTitle}>{props.eventTitle}</h4>
            <span className={styles.eventDescription}>{props.eventDescription}</span>
        </div>
    );
};
