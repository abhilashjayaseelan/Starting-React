import { IMG_CDN_URL } from "../constants";

const RestaurantCard = (props) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + props.cloudinaryImageId} />
      <h2>{props.name}</h2>
      <h3>{props.cuisines.join(", ")}</h3>
      <h4>{props.lastMileTravelString} </h4>
    </div>
  );
};

export default RestaurantCard;