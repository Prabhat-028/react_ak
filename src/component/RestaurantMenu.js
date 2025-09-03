import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer.js";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import MenuItemCard from "./MenuItemCard.js";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [openCategory, setOpenCategory] = useState(null); // track the open category

  if (!resInfo) return <Shimmer />;

  const menuItems = [];

  const regularCards =
    resInfo?.cards?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  regularCards.forEach((card) => {
    const itemCards = card?.card?.card?.itemCards;
    if (itemCards) {
      itemCards.forEach((item) => {
        menuItems.push(item.card.info);
      });
    }
  });

  const categories = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  const handleCategoryClick = (categoryName) => {
    setOpenCategory((prev) => (prev === categoryName ? null : categoryName));
  };

  return (
    <div className="menu-container">
      {Object.entries(categories).map(([categoryName, items]) => (
        <div key={categoryName} className="category-block">
          <div
            className="category-title-container"
            onClick={() => handleCategoryClick(categoryName)}
          >
            <h2 className="category-title">{categoryName}</h2>
            <h1>{openCategory === categoryName ? "⬆️" : "⬇️"}</h1>
          </div>

          {openCategory === categoryName && (
            <div className="items-list">
              {items.map((item, index) => (
                <MenuItemCard key={`${item.id}-${index}`} item={item} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
