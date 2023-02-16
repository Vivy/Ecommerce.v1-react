import { useContext } from 'react';
import { ShopContext } from '../../context/context';

const Product = ({ productImg, productName, price, id }) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className='product'>
      <img src={productImg} alt='' />
      <div className='description'>
        <h3>{productName}</h3>
        <p>£ {price}</p>
      </div>
      <button className='addToCartBttn' onClick={() => addToCart(id)}>
        Add to Cart{cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;
