import Styles from "./DishList.module.css";
import { Dish } from "@/components";

export function DishList() {
  return (
    <div className={Styles.list}>
      <Dish />
      <Dish />
      <Dish />
      <Dish />
      <Dish />
    </div>
  );
}
