import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products] = useState(productsData);
  const [currentColor, setCurrentColor] = useState(products[0].colors[0]);
  const [size, setSize] = useState(products[0].sizes[0].name);

  return (
    <section>
      {products.map(products => <Product key={products.id} {...products} colors={currentColor} />)
      }
    </section>
  );
};


export default Products;