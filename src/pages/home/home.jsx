import { products } from '../../products';
import Product from '../../component/product/product';
import './home.css';

const Home = () => {
  return (
    <div>
      <div className='shop'>
        <div className='shopTitle'>
          <h4>Vivy`s Shop</h4>
        </div>
        <div className='products'>
          {products.map(({ id, productName, productImg, price }) => (
            <Product
              key={id}
              productImg={productImg}
              productName={productName}
              price={price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
