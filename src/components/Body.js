import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useDebugValue } from "react"; //? importing hooks from react
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

// function for filtering the data
function filterData(searchText, restaurantsData) {
  const filterData = restaurantsData?.filter((restaurant) => {
    return restaurant?.data?.name
      ?.toLowerCase()
      .includes(searchText?.toLowerCase());
  });
  return filterData;
}

// body
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]); //? creating a local state variable with the useState hook!!!
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState();

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (err) {
      console.error(err);
    }
  }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
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
            <Link to={"/restaurant/" + restaurant?.data?.id}>
              <RestaurantCard
                {...restaurant?.data}
                key={restaurant?.data?.id}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
