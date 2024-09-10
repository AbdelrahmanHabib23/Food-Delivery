/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { StoreContext } from "../../componant/statecontext/statecontext";
import "./cart.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { food_list, cartItems, removetoCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigation = useNavigate();
  return (
    <>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
        </div>
        <br />
        <hr />
        {food_list.map((item, _index) => {
          {
            console.log(item);
          }
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => {
                      removetoCart(item._id);
                    }}
                    className="cross"
                  >
                    x
                  </p>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Free</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>
                $
                {getTotalCartAmount() === 0
                  ? 0
                  : (getTotalCartAmount() + 2)}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              navigation("/order");
            }}
          >
            PROCEED TO CHECK
          </button>
        </div>

        <div className="cart-promocode">
          <p>if you have a promo code , Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
