import Image from "next/image";
import { DisheDetails } from "..";
import Styles from "./Dishe.module.css";

export function Dishe() {
  return (
    <div className={Styles.dishe}>
      <div className={Styles.wrapper}>
        <Image
          src="https://storage.googleapis.com/onfood/peperoni.jpg"
          alt="Prato"
          width={592}
          height={312}
        />
      </div>
      <div>
        <div className={Styles.header}>
          <h2>Titulo do Produto</h2>
        </div>
        <div className={Styles.details}>
          <DisheDetails type="reviews" title="(201)" subtitle="4.5" />
          <DisheDetails type="category" title="Categoria" />
          <DisheDetails type="delivery" title="30 - 40 min" />
        </div>
      </div>
    </div>
  );
}
