import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useAllRestaurants from "../hooks/useAllRestaurants";
import Offline from "./OffLine";
import isOnline from "../hooks/useOnline";

// body
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState();
  const online = isOnline();

  useAllRestaurants(setAllRestaurants);
  useAllRestaurants(setFilteredRestaurants);

  if (!online) {
    return <Offline />;
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.data?.id}
              key={restaurant?.data?.id}
            >
              <RestaurantCard {...restaurant?.data} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
