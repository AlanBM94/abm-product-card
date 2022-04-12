import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components/';
import { product } from '../data/products';

describe('Product Title', () => {
  test('must show the component with a custom title', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom product" className="custom-class" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('must show the component with product name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product}>{() => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
