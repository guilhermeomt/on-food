import { useQuery } from "react-query";
import { Dish } from "@/components";
import { api } from "@/services";
import { DishType } from "@/types";
import Styles from "./DishList.module.css";

export function DishList() {
  const fetchDishes = async () => {
    const response = await api.get<DishType[]>("/deliveries?city=sao-paulo-sp");
    return response.data;
  };

  const { data, isFetching } = useQuery<DishType[]>("dishes", fetchDishes);

  return (
    <div className={Styles.list}>
      {isFetching
        ? "Carregando..."
        : data?.map((dish) => <Dish key={dish.id} {...dish} />)}
    </div>
  );
}
