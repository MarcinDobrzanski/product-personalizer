import styles from './ProductImage.module.scss';
import PropTypes from 'prop-types';


const ProductImage = props => {

  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt="Kodilla shirt"
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.productName}--${props.currentColor}.jpg`} />
    </div>
  );
}


ProductImage.propTypes = {
  productName: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
};

export default ProductImage;