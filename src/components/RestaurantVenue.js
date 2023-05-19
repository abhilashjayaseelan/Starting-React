import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../hooks/useRestaurants";

const Restaurant = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  return !restaurant ? (
    <div className="mt-28 m-10 animate-pulse">
      <div className="flex items-center">
        <div className="w-60 h-60 bg-gray-300"></div>
        <div className="ml-8">
          <div className="mb-4 h-10 w-60 bg-gray-300"> </div>
          <div className="mb-4 h-6 w-60 bg-gray-300"> </div>
          <div className="mb-4 h-6 w-60 bg-gray-300"> </div>
          <div className="mb-4 h-6 w-60 bg-gray-300"> </div>
          <div className="mb-4 h-6 w-60 bg-gray-300"> </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="menu mt-28 m-10">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
            className="w-60 h-60 object-cover rounded-lg"
            alt={restaurant?.name}
          />
        </div>
        <div className="ml-8">
          <h1 className="text-4xl font-bold mb-4">{restaurant?.name}</h1>
          <h3 className="text-lg font-semibold">{restaurant?.city}</h3>
          <h3 className="text-lg font-semibold">{restaurant?.locality}</h3>
          <h3 className="text-lg">Rating: {restaurant?.avgRating}</h3>
          <h3 className="text-lg">{restaurant?.costForTwoMessage}</h3>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
