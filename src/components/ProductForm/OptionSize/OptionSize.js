import styles from '../ProductForm.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = props => {

  return (
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
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      additionalPrice: PropTypes.number,
    })
  ),
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
};

export default OptionSize;