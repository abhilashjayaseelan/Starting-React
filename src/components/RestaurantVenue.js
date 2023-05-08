import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../hooks/useRestaurants";
import Shimmer from "./shimmer";


const Restaurant = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);

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
    </div>
  );
};

export default Restaurant;
