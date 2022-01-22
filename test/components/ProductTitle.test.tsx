import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src';
import { Product } from '../../src/interfaces/interfaces';

const product: Product = {
  id: '1',
  title: 'Coffee Mug - Card',
};

describe('it', () => {
  it('renders ProductTitle without crashing', () => {
    const wrapper = renderer.create(<ProductTitle title={product.title} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('renders ProductCard withoout crashing', () => {
    const wrapper = renderer.create(
      <ProductCard product={product} initialValues={{}}>
        {() => <ProductTitle />}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
