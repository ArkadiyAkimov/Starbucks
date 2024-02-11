import styles from '../styles/footer.module.scss'

export default function Footer(){

    return (
        <footer className={styles.footer}>
            <div className={styles.drop_down_section}>
            <button className={styles.drop_down_title}>About Us</button>
                <button className={styles.drop_down_item}>Our Company</button>
                <button className={styles.drop_down_item}>Our Coffee</button>
                <button className={styles.drop_down_item}>Stories and News</button>
                <button className={styles.drop_down_item}>Starbucks Archive</button>
                <button className={styles.drop_down_item}>Investor Relations</button>
                <button className={styles.drop_down_item}>Customer Service</button>
                <button className={styles.drop_down_item}>Contact Us</button>
            </div>
        </footer>
    )
}