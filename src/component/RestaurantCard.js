
import { CARD_URL } from "../utils/constans";

const RestaurantCard = ({ restaurant }) => {
  const {
    name = "No Name",
    cuisines = [],
    avgRating = "N/A",
    costForTwo = "N/A",
    areaName = "Unknown Area",
    cloudinaryImageId = "",
    sla = {},
  } = restaurant;

  return (
    <div className="res-card">
      <img
        className="itemImage"
        src={CARD_URL + cloudinaryImageId}
        alt={name}
      />

      <div className="res-cardData">
        <h2>{name}</h2>
        <p>{cuisines.join(", ")}</p>
        <p>{areaName}</p>
        <p>Rating: {avgRating}⭐</p>
        <p>Delivery Time: {sla.deliveryTime || "N/A"} mins</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
