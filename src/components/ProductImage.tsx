import React, { useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from './../styles/styles.module.css';
import noImage from './../assets/no-image.jpg';

export const ProductImage = ({ img = '' }: { img?: string }) => {
  const { product } = useContext(ProductContext);

  let imgToShow: string;

  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = noImage;
  } else {
    imgToShow = noImage;
  }

  return (
    <img src={imgToShow} alt="Product image" className={styles.productImg} />
  );
};
