import Link from "next/link";
import { Card } from "../Card/Card";
import Styles from "./CardList.module.css";
import { FC } from "react";

interface Props {
  id: string;
  data: Array<any>;
}

export const CardsList:FC<Props> = (props) => {
  //сейчас массив с кроссовками пуст
  return (
    <section className={Styles["list-section"]}>
      <h2 className={Styles["list-section__title"]} id={props.id}>
        {props.id.toUpperCase()}
      </h2>
      <ul className={Styles["cards-list"]}>
        {props.data.map((item) => {
          return (
            <li className={Styles["cards-list__item"]} key={item.id}>
              <Link
                href={`/catalog/${props.id}/${item.id}`}
                className={Styles["card-list__link"]}
              >
                <Card {...item} />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
