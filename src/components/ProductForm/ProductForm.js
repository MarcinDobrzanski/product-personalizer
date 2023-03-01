import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const ProductForm = props => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {props.sizes.map(item =>
            <li key={item.name}>
              <button type="button" className={clsx(props.currentSize === item.name && styles.active)} onClick={() => props.setCurrentSize(item.name)}>{item.name}</button>
            </li>
          )}
        </ul>
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
          {props.colors.map(item =>
            <li key={item}>
              <button type="button" className={clsx(prepareColorClassName(item), props.currentColor === item && styles.active)} onClick={() => props.setCurrentColor(item)} />
            </li>
          )}
        </ul>
      </div>
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