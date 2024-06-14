import Link from "next/link";
import styles from './Catalog.module.css'

export default function Catalog() {
    return(
        <main className={styles.main_catalog}>
            <h2 className={styles.title}>Категории</h2>
            <div className={styles.category_wrapper}>
                <Link href='/catalog/shirts'>Футболки</Link>
                <Link href='/catalog/cap'>Кепки</Link>
            </div>
        </main>
    )
}