import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import cross_icon from "/cart_cross_icon.png";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const CartItems = () => {
  const { addToCart, products, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div className="container my-5">
      <div className="row text-center font-weight-bold">
        <div className="col d-md-block d-none">Products</div>
        <div className="col">Title</div>
        <div className="col">Price</div>
        <div className="col">Quantity</div>
        <div className="col">Total</div>
        <div className="col d-md-block d-none">Add</div>
        <div className="col d-md-block d-none">Remove</div>
      </div>
      <hr />
      {products.map((item) => {
        const quantity = cartItems[item._id] || 0;
        if (quantity > 0) {
          return (
            <div key={item._id} className="row text-center align-items-center py-3">
              <div className="col">
                <img src={item.image} alt={item.name} className="img-fluid d-md-block d-none" style={{ width: '100px' }} />
              </div>
              <div className="col ">{item.name}</div>
              <div className="col">${item.price}</div>
              <div className="col">{quantity}</div>
              <div className="col">${item.price * quantity}</div>
              <div className="col text-success add" onClick={() => addToCart(item._id)}>+</div>
              <div className="col text-danger cross" onClick={() => removeFromCart(item._id)}>-</div>
            </div>
          );
        }
        return null;
      })}
      <hr />

      <div className="row mt-5">
        <div className="col-lg-6 mb-4">
          <h2>Cart Totals</h2>
          <div className="d-flex justify-content-between">
            <p>SubTotal</p>
            <p>${0}</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between font-weight-bold">
            <h3>Total</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
          <button className="btn btn-danger btn-lg mt-3" onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>

        <div className="col-lg-6">
          <p>If You have a promo code, Enter it here:</p>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Enter Promo code" />
            <div className="input-group-append">
              <button className="btn btn-dark">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
