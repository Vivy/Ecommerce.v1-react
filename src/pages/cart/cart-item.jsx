import { useContext } from 'react';
import { ShopContext } from '../../context/context';

const CartItem = ({ product }) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className='cartItem'>
      <img src={product.productImg} />
      <div className='description'>
        <h4>{product.productName}</h4>
        <p>$ {product.price}</p>
        <div className='countHandler'>
          <button onClick={() => removeFromCart(product.id)}> - </button>
          <input
            value={cartItems[product.id]}
            onChange={(e) =>
              updateCartItemCount(Number(e.target.value), product.id)
            }
          />
          <button onClick={() => addToCart(product.id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
