import { cdn_URL } from "../utils/constants";

const RestaurantCard = ({ restaurantData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
//    sla: { deliveryTime } = ({} = {}), // as deliveryTime is inside sla{} object which itself is inside info{}
    sla
  } = restaurantData?.info;

  return (
    <div className="restaurant-card" style={{ backgroundColor: "gainsboro" }}>
      <img
        className="restaurant-logo"
        alt="veg-biryani"
        src={cdn_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>Ratings: {avgRating}</h4>
      {/* <h4>Delivery: {deliveryTime}</h4> */}
      <h4>Delivery: {sla?.slaString}</h4>

    </div>
  );
};

export default RestaurantCard;
