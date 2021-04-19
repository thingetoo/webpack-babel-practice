import { shallow } from 'enzyme';
import React from 'react';
import RelProductList from '../client/components/RelProductList.jsx';
import '../setupTest'

it("renders without crashing", () => {
  shallow(<RelProductList />);
})