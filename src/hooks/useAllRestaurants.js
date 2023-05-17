import { useEffect, useState } from "react";
import { ALL_RESTAURANTS_URL } from "../constants";
import { filterData } from "../utils/Helper";

const useAllRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getRestaurants() {
      try {
        const data = await fetch(ALL_RESTAURANTS_URL);
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err);
      }
    }

    getRestaurants();
  }, []);

  useEffect(() => {
    if (allRestaurants?.length > 0) {
      setFilteredRestaurants(allRestaurants);
    }
  }, [allRestaurants]);

  const handleFilterData = (searchInput) => {
    const data = filterData(searchInput, allRestaurants);
    setFilteredRestaurants(data);
  };

  return {
    allRestaurants,
    filteredRestaurants,
    loading,
    error,
    handleFilterData,
  };
};

export default useAllRestaurants;
