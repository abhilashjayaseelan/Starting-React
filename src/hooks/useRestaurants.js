import { useState, useEffect } from "react";
import { FETCH_RES_URL } from "../constants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo(id);
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(`${FETCH_RES_URL}${id}&submitAction=ENTER`);
    const json = await data?.json();
    console.log(json.data);
    setRestaurant(json.data?.cards[0]?.card?.card?.info);
  }

  return restaurant;
};

export default useRestaurant;
