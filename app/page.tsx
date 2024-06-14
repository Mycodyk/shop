
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main_description}>
        <h1 className={styles.main_title}>SMR Mode</h1>
        <p className={styles.main_subtitle}>Футболки с классным качественным принтом</p>
      </div>
      <Link href={'/catalog'} className={styles.main_button}>Каталог</Link>
    </main>
  );
}
