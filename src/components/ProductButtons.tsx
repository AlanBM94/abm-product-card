import React, { useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from './../styles/styles.module.css';

export const ProductButtons = () => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(() => {
    return !!maxCount && counter === maxCount;
  }, [counter, maxCount]);

  return (
    <div className={styles.buttonsContainer}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        onClick={() => increaseBy(+1)}
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
      >
        +
      </button>
    </div>
  );
};
