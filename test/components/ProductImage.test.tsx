import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components/';
import { product } from '../data/products';
import 'jest-styled-components';

describe('Product image', () => {
  test('must show the component with a custom image', () => {
    const wrapper = renderer.create(<ProductImage img="https://hola.jpg" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('must show the component with product name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
