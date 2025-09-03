import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../utils/cartSlice"; // adjust path

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <>
      {cartItems.length === 0 ? (
        <h2>Nothing to show in the cart</h2>
      ) : (
        <div className="cart-container">
                      {/* ✅ Clear Cart Button */}
            <h2>Do You Want To Clear The Cart?</h2>
          <button
            className="clear-cart-btn"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>

          {cartItems.map((item, index) => {
            const price = item.price || item.finalPrice || item.defaultPrice;
            return (
              <div className="cart-items" key={index}>
                <div className="menu-item-card">
                  <div className="menu-item-content">
                    <h3 className="menu-item-name">{item.name}</h3>
                    <p className="menu-item-price">₹{(price / 100).toFixed(2)}</p>
                    <p
                      className={`menu-item-type ${
                        item.isVeg ? "veg" : "non-veg"
                      }`}
                    >
                      {item.isVeg ? "🥬 Veg" : "🍗 Non-Veg"}
                    </p>
                    <p className="menu-item-description">{item.description}</p>
                  </div>

                  {/* ✅ Add & Remove buttons */}
                  <div className="cart-actions">
                    <button
                      className="add-btn"
                      onClick={() => dispatch(addItem(item))}
                    >
                      Add+
                    </button>
                    <button
                      className="remove-btn"
                      onClick={() => dispatch(removeItem(index))}
                    >
                      Remove 
                    </button>
                  </div>

                  {item.imageId && (
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                      alt={item.name}
                      className="menu-item-image"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Cart;
