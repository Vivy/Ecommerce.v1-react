import React, { useContext } from 'react';
import { products } from '../../products';
import { ShopContext } from '../../context/context';
import CartItem from './cart-item';
import './cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem product={product} />;
          }
        })}
      </div>
      <div className='checkout'>
        <p>Subtotal: $ {totalAmount}</p>
        <button onClick={() => navigate('/')}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
