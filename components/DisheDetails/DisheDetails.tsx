import Styles from "./DisheDetails.module.css";
import { DisheDetailsProps } from "./types";
import { IconDelivery, IconCategory, IconReviews } from "@/icons";

export function DisheDetails({ title, subtitle, type }: DisheDetailsProps) {
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
