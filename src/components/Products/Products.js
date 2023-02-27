import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products] = useState(productsData);
  const [currentColor, setCurrentColor] = useState(productsData[0].colors[0]);
  const [size, setSize] = useState(productsData[0].sizes[0].name);
  console.log('currentColor', currentColor);
  console.log('size', size);
  console.log('products', products);

  const getRightProduct = () => {
    if (products.name === 'react') {}
  };

  return (
    <section>
      {products.map(products => <Product key={products.id} {...products} currentColor={currentColor} />)
      }
    </section>
  );
};


export default Products;