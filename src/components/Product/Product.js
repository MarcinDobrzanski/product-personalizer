import styles from './Product.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { useState } from 'react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  // console.log('currentSize', currentSize);
  console.log('props', props);
  console.log('props.sizes', props.sizes);


  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt="Kodilla shirt"
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{props.basePrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(item =>
                <li key={item.name}>
                  <button type="button" className={clsx(currentSize === item.name && styles.active)}>{item.name}</button>
                </li>
              )}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              <li><button type="button" className={clsx(styles.colorBlack, currentColor === 'black' && styles.active)} /></li>
              <li><button type="button" className={clsx(styles.colorRed, currentColor === 'black' && styles.active)} /></li>
              <li><button type="button" className={clsx(styles.colorWhite, currentColor === 'black' && styles.active)} /></li>
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};


Product.propTypes = {

  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string, additionalPrice: PropTypes.number })).isRequired,

};

export default Product;