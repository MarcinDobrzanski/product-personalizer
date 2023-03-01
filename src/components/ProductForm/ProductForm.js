import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionColor from './OptionColor/OptionColor';
import OptionSize from './OptionSize/OptionSize';
import PropTypes from 'prop-types';

const ProductForm = props => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} />
      <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} prepareColorClassName={prepareColorClassName} />
      <Button className={styles.button} type="submit" >
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string),
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      additionalPrice: PropTypes.number,
    })
  ),
};

export default ProductForm;