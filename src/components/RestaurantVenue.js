import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./shimmer";

const Restaurant = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.9312328&lng=76.26730409999999&restaurantId=${id}&submitAction=ENTER`
    );
    const json = await data?.json();
    console.log(json.data);
    setRestaurant(json.data?.cards[0]?.card?.card?.info);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>{restaurant?.name}</h1>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
      </div>
      <div>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.locality}</h3>
        <h3>{restaurant?.avgRating} rating </h3>
        <h3>{restaurant?.costForTwoMessage}</h3>
      </div>
      {/* <div>
        <h2>Menu</h2>
      </div> */}
    </div>
  );
};

export default Restaurant;
