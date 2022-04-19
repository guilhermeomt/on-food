import { useQuery } from "react-query";
import { Dish, DishSkeleton } from "@/components";
import { api } from "@/services";
import { DishType } from "@/types";
import Styles from "./DishList.module.css";
import { DishListProps } from "./types";

export function DishList(props: DishListProps) {
  const fetchDishes = async () => {
    const response = await api.get<DishType[]>(
      `/deliveries?city=${props.citySlug}`
    );
    return response.data;
  };

  const { data, isFetching } = useQuery<DishType[]>("dishes", fetchDishes);

  const skeletons = Array.from({ length: 3 });

  return (
    <div className={Styles.list}>
      {isFetching
        ? skeletons.map((_, index) => <DishSkeleton key={index} />)
        : data?.map((dish) => <Dish key={dish.id} {...dish} />)}
    </div>
  );
}
