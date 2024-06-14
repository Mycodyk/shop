import styles from './Footer.module.css'

export const Footer = () => {
    return(
        <footer className={styles.footer_content}>
            <div className={styles.footer_menu}>
                <img className={styles.footer__logo_image} src="/Logo.png" alt="Логотип магазина"/>
                <ul className={styles.social_list}>
                    <li className={styles.social__links}>
                        <a href="https://t.me/mycodyk">TG</a>
                    </li>
                    <li className={styles.social__links}>
                        <a href="">VK</a>
                    </li>
                    <li className={styles.social__links}>
                        <a href="">YouTube</a>
                    </li>
                </ul>
            </div>
            <p className={styles.footer_copyright}>Mycodyk</p>
        </footer>
    )
}