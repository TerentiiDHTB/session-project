import styles from "./ui.module.scss";

export interface NewItemPropsI{
    id: string;
    imgSrc: string,
    date: string,
    newsTitle: string
}

export const NewsItem = (props: NewItemPropsI) => {
    return (
        <div id={props.id} className={styles.newsItemWrapper}>
            <img src={props.imgSrc} alt="newsItem" className={styles.newsImg}/>
            <div className={styles.textBlockWrapper}>
                <span className={styles.date}>{props.date}</span>
                <span className={styles.newsTitle}>{props.newsTitle}</span>
            </div>
        </div>
    );
};
