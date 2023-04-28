import { IMG_CDN_URL } from "../constants";

const RestaurantCard = (props) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + props.cloudinaryImageId} />
      <h3>{props.name}</h3>
      <h5>{props.cuisines.join(", ")}</h5>
      <h5>{props.lastMileTravelString} </h5>
    </div>
  );
};

export default RestaurantCard;