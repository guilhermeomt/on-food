import Styles from "./DishDetails.module.css";
import { DishDetailsProps } from "./types";
import { IconDelivery, IconCategory, IconReviews } from "@/icons";

export function DishDetails({ title, subtitle, type }: DishDetailsProps) {
  const Icon =
    type === "delivery"
      ? IconDelivery
      : type === "category"
      ? IconCategory
      : IconReviews;
  return (
    <div className={Styles.details}>
      <div className={Styles.icon}>
        <Icon />
      </div>
      {subtitle && <span>{subtitle}</span>}
      {title}
    </div>
  );
}
