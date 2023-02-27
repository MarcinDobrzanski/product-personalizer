import styles from './Product.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const Product = products  => {



  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt="Kodilla shirt"
          src={`${process.env.PUBLIC_URL}/images/products/shirt-kodilla--${products.currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{products.title}</h2>
          <span className={styles.price}>{products.basePrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              <li><button type="button" className={styles.active}>S</button></li>
              <li><button type="button">M</button></li>
              <li><button type="button">L</button></li>
              <li><button type="button">XL</button></li>
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              <li><button type="button" className={clsx(styles.colorBlack, styles.active)} /></li>
              <li><button type="button" className={clsx(styles.colorRed)} /></li>
              <li><button type="button" className={clsx(styles.colorWhite)} /></li>
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
  products: PropTypes.shape({
    title: PropTypes.string.isRequired,
    currentColor: PropTypes.string.isRequired,
    basePrice: PropTypes.number.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Product;