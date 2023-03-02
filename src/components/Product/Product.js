import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import { useState, useMemo } from 'react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

const getPrice = useMemo(() => {
    const size = props.sizes.find((item) => item.name === currentSize);
    const additionalPrice = size ? size.additionalPrice : 0;
    return props.basePrice + additionalPrice;
  }, [currentSize, props.basePrice, props.sizes]);

  console.log('getPrice', getPrice);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Summary:');
    console.log('Price:', getPrice);
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
  };

  return (
    <article className={styles.product}>
      <ProductImage currentColor={currentColor} productName={props.name} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {`${getPrice}$`}</span>
        </header>
        <ProductForm currentColor={currentColor} setCurrentColor={setCurrentColor} handleSubmit={handleSubmit} currentSize={currentSize} setCurrentSize={setCurrentSize} colors={props.colors} sizes={props.sizes} />
      </div>
    </article>
  )
};



Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string),
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      additionalPrice: PropTypes.number,
    })
  ),
};

export default Product;