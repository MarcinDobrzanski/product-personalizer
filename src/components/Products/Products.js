import { useState } from 'react';
import products from '../../data/products';
import Product from '../Product/Product';

const Products = () => {

  return (
    <section>
      {products.map(product => <Product key={product.id} {...product} />)
      }
    </section>
  );
};


export default Products;