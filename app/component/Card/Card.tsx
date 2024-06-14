import styles from './Card.module.css';
import { FC } from 'react';

interface Props{
    image: string,
    name: string;
    price: number;
}

export const Card:FC<Props> = ({ image, name, price }) => {
    return(
        <article className={styles.clothes}>
            <img src={image} alt="clothes-image" className={styles.clothes_image}/>
            <div className={styles.clothes_info}>
                <h3 className={styles.clothes_name}>{name}</h3>
                <p className={styles.clothes_price}>{price}</p>
                <button className={styles.clothes_button}>Заказать</button>
            </div>
        </article>
    )
}