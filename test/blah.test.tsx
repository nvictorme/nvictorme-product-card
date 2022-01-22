import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductTitle } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProductTitle title="Coffee Mug" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
