import styles from "./ui.module.scss";

import {Header} from "@/widgets/header";

import {NavLink} from "react-router-dom";
import {MenuItem} from "@/shared/ui/menuItem";
import {infoItems} from "./lib/infoItems.ts";
import {SideMenuItems} from "./lib/sideMenuItems.ts";
import {SideMenuItem} from "@/shared/ui/sideMenuItem";
import {eventItems} from "./lib/eventItems.ts";
import {newsItems} from "./lib/newsItems.ts";
import {EventItem} from "@/shared/ui/eventItem";

import newsImgBig1 from "@/shared/assets/images/newsImgBig1.png"
import newsImgBig2 from "@/shared/assets/images/newsImgBig2.png"
import {NewsItem} from "@/shared/ui/newsItem";
import {Footer} from "@/widgets/footer";

import {animated, useSpring} from "@react-spring/web";

export const Main = () => {
    const animation = useSpring({
        from: {
            opacity: 0,
            x: 100,
        },
        to: {
            opacity: 1,
            x: 0,
        },
        config:{duration:2000}
    });

    const animation2 = useSpring({
        from: {
            opacity: 0,
            x: -100,
        },
        to: {
            opacity: 1,
            x: 0,
        },
        config:{duration:2000}
    });

    return(
        <div className={styles.pageWrapper}>
            <div className={styles.titleBlockWrapper}>
                <Header/>
                <div className={styles.titleTextWrapper}>

                <animated.div style={animation}>
                        <div className={styles.titleWrapper}>
                            <h1>
                                ЭКСПОФОРУМ
                            </h1>
                            <span style={{width:"fit-content"}}>конгрессно-выставочныф центр<br/>Санкт-Петербурга</span>
                            <NavLink to="#">О комплексе &#8594;</NavLink>
                        </div>
                </animated.div>

                    <animated.div style={animation2}>
                        <div className={styles.infosWrapper}>
                            {infoItems.map(item =>
                                <MenuItem key={item.id} {...item}/>
                            )}
                        </div>
                    </animated.div>
                </div>
            </div>
            {/*тоже или виджет или шаред..*/
            }
            <div className={styles.sideMenuBlockWrapper}>
                <div className={styles.sideMenuWrapper}>
                {SideMenuItems.map(item =>
                        <SideMenuItem key={item.id} {...item}/>
                    )}
                </div>
            </div>
            {/*тоже или виджет или шаред*/}
            <div className={styles.eventsBlockWrapper}>
                <div className={styles.eventsWrapper}>
                    <div className={styles.eventsBlockHeader}>
                        <h2>Текущие и будущие мероприятия</h2>
                        <NavLink to="#">Все мероприятия &#8594;</NavLink>
                    </div>
                    <div className={styles.eventItemsWrapper}>
                        {eventItems.map(item =>
                            <EventItem key={item.id} {...item}/>
                        )}
                    </div>
                </div>
            </div>
            {/*по-хорошему это тоже можно было выделить в виджет или шаред*/}
            <div className={styles.newsBlockWrapper}>
                <div className={styles.newsWrapper}>
                    <div className={styles.newsImgBlockWrapper}>
                        <img src={newsImgBig1} alt="newsImg" className={styles.newsImg}/>
                        <img src={newsImgBig2} alt="newsImg" className={styles.newsImg}/>
                    </div>

                    <div className={styles.newsTextBlockWrapper}>
                        <div className={styles.newsTextHeader}>
                            <h2>Новости</h2>
                            <NavLink to="#">Все новости &#8594;</NavLink>
                        </div>

                        {newsItems.map(item =>
                            <NewsItem key={item.id} {...item}/>
                        )}
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}