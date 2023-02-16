const Product = ({ productImg, productName, price }) => {
  return (
    <div className='product'>
      <img src={productImg} alt='' />
      <div className='description'>
        <h3>{productName}</h3>
        <p>£ {price}</p>
      </div>
      <button className='addToCartBttn'>Add to Cart</button>
    </div>
  );
};

export default Product;
