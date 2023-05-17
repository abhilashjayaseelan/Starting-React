import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAllRestaurants from "../hooks/useAllRestaurants";
import Offline from "./OffLine";
import isOnline from "../hooks/useOnline";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const {
    allRestaurants,
    filteredRestaurants,
    loading,
    error,
    handleFilterData,
  } = useAllRestaurants();

  const online = isOnline();

  if (!online) {
    return <Offline />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="body">
      <div className="ml-6 mt-28">
        <input
          type="text"
          className="h-10 p-3 rounded-md border-2 border-gray-300 shadow-sm outline-none text-base font-medium text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-80 mr-10 ml-5"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="hover:bg-blue-400 h-10 w-20 rounded-md border-none shadow-sm text-base font-medium text-white bg-gray-500 cursor-pointer"
          onClick={() => handleFilterData(searchInput)}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap ml-5">
        {loading &&
          Array(10)
            .fill("1")
            .map((e, index) => {
              return (
                <div className="flex flex-wrap p-3 m-7 mt-28 border-3 border-gray-500 rounded-md">
                  <div className="h-96 w-60 bg-gray-300"></div>
                </div>
              );
            })}
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant?.data?.id}`}
            key={restaurant?.data?.id}
          >
            <RestaurantCard {...restaurant?.data} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
