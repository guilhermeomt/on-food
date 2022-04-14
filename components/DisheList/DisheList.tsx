import Styles from "./DisheList.module.css";
import { Dishe } from "@/components";

export function DisheList() {
  return (
    <div className={Styles.list}>
      <Dishe />
      <Dishe />
      <Dishe />
      <Dishe />
      <Dishe />
    </div>
  );
}
