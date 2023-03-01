import styles from '../ProductForm.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = props => {

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map(item =>
          <li key={item}>
            <button type="button" className={clsx(props.prepareColorClassName(item), props.currentColor === item && styles.active)} onClick={() => props.setCurrentColor(item)} />
          </li>
        )}
      </ul>
    </div>
  );
};

OptionColor.propTypes = {
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  prepareColorClassName: PropTypes.func.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string),
};

export default OptionColor;