/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useContext } from "react";
import "./Placeorder.css";
import { StoreContext } from "../../componant/statecontext/statecontext";
const Placeorder = () => {


  const{getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery information</p>
        <div className=" multi-fields">
          <input type="text" placeholder="Firstname" />
          <input type="text" placeholder="lastname" />
        </div>
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street" />
        <div className=" multi-fields">
        <input type="text" placeholder="City" />
        <input type="text" placeholder="State" />
        </div>
        <div className=" multi-fields">
        <input type="text" placeholder="Zip code" />
        <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />


      </div>
      <div className="place-order-left" >
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
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button onClick={()=>{navigation('/order')}}>PROCEED TO CHECK</button>
        </div>

      </div>
    </form>
  );
};

export default Placeorder;
