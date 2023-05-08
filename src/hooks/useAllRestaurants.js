import { useEffect } from "react";
import { ALL_RESTAURANTS_URL } from "../constants";

const useAllRestaurants = (setAllRestaurants) => {
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(ALL_RESTAURANTS_URL);
      const json = await data.json();
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      return;
    } catch (err) {
      console.error(err);
      return new Error(err);
    }
  }
};

export default useAllRestaurants;
