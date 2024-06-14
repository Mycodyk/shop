import Link from "next/link";
import styles from './Catalog.module.css'

export const Catalog = () => {
    return(
        <main className="main_catalog">
            <h2>Категории</h2>
            <div className={styles.category_wrapper}>
                <Link href='/catalog/shirts'>Футболки</Link>
                <Link href='/catalog/cap'>Кепки</Link>
            </div>
        </main>
    )
}