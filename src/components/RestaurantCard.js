import { IMG_CDN_URL } from "../constants";

const RestaurantCard = (props) => {
  return (
    <div className="hover:-translate-y-1 hover:shadow-lg w-60 h-96 p-3 m-7 border-3 border-gray-500 rounded-md bg-white shadow-xl font-sans flex flex-col justify-between transition-all duration-300 ease-in-out">
      <img className="w-full h-200 object-cover rounded-md" src={IMG_CDN_URL + props.cloudinaryImageId} />
      <h3>{props.name}</h3>
      <h5>{props.cuisines.join(", ")}</h5>
      <h5>{props.lastMileTravelString} </h5>
    </div>
  );
};

export default RestaurantCard;