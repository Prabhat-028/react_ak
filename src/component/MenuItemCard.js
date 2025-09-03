import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItemCard = ({ item }) => {
    const price = item.price || item.finalPrice || item.defaultPrice;
    
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        //dispatch action
        dispatch(addItem(item));
    }

  return (
    <div className="menu-item-card">
      <div className="menu-item-content">
        <h3 className="menu-item-name">{item.name}</h3>
        <p className="menu-item-price">
          ₹{price < 100000 ? price / 100 : price / 1000}
        </p>
        <p className={`menu-item-type ${item.isVeg ? "veg" : "non-veg"}`}>
          {item.isVeg ? "🥬 Veg" : "🍗 Non-Veg"}
        </p>
        <p className="menu-item-description">{item.description}</p>
      </div>
          <button className="Add-to-cart-button" onClick={() => { handleAddItem (item)}}>ADD +</button>
      {item.imageId && (
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
          alt={item.name}
          className="menu-item-image"
        />
      )}
    </div>
  );
};

export default MenuItemCard;
