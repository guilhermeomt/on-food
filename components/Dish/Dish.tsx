import Image from "next/image";
import { DishDetails } from "..";
import Styles from "./Dish.module.css";

export function Dish() {
  return (
    <div className={Styles.dish}>
      <div className={Styles.wrapper}>
        <Image
          src="https://storage.googleapis.com/onfood/peperoni.jpg"
          alt="Prato"
          width={592}
          height={312}
          layout="responsive"
        />
      </div>
      <div>
        <div className={Styles.header}>
          <h2>Titulo do Produto</h2>
        </div>
        <div className={Styles.details}>
          <DishDetails type="reviews" title="(201)" subtitle="4.5" />
          <DishDetails type="category" title="Categoria" />
          <DishDetails type="delivery" title="30 - 40 min" />
        </div>
      </div>
    </div>
  );
}
