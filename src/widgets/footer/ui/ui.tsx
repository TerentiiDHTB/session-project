import styles from "./ui.module.scss";
import {footerSideMenuItems} from "@/widgets/footer/lib/footerSideMenuItems.ts";
import {SideMenuItem} from "@/shared/ui/sideMenuItem";

import youtubeLogo from "@/shared/assets/images/youtubeLogo.png"
import vkLogo from "@/shared/assets/images/vkLogo.png"
import facebookLogo from "@/shared/assets/images/facebookLogo.png"
import instLogo from "@/shared/assets/images/instagramLogo.png"
import appStoreLogo from "@/shared/assets/images/appStoreDownloadImg.png"
import playStoreLogo from "@/shared/assets/images/playStoreDownloadImg.png"
import subscriptionLogo from "@/shared/assets/images/subscriptionLogo.png"

export const Footer = () => {
    return (
        <div className={styles.footerBlockWrapper}>
            <div className={styles.footerContentWrapper}>
                <div className={styles.footerLineWrapper}>
                    {footerSideMenuItems.slice(0, 4).map(item =>
                        <SideMenuItem key={item.id} {...item}/>
                    )}
                </div>

                <div className={styles.footerLineWrapper}>
                    {footerSideMenuItems.slice(4).map(item =>
                        <SideMenuItem key={item.id} {...item}/>
                    )}

                    <div className={styles.appLinksWrapper}>
                        <h2>Приложение</h2>
                        <a href="#"><img src={appStoreLogo} alt="appLogo"/></a>
                        <a href="#"><img src={playStoreLogo} alt="appLogo"/></a>
                    </div>

                    <div className={styles.socialMediaWrapper}>
                        <h2>Мы в соц. сетях</h2>
                        <img src={youtubeLogo} alt="socmediaimg"/>
                        <img src={vkLogo} alt="socmediaimg"/>
                        <img src={facebookLogo} alt="socmediaimg"/>
                        <img src={instLogo} alt="socmediaimg"/>
                    </div>

                    <div className={styles.newsSubscriptionWrapper}>
                        <h2>Подписка на новости</h2>
                        <span>Получайте все самые последние новости о мероприятиях в Экспофоруме.</span>
                        <div className={styles.sendMailWrapper}>
                            <input type="email" placeholder="Введите ваш e-mail"/>
                            <button><img src={subscriptionLogo} alt="sublogo"/></button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};
