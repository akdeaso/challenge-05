import * as React from 'react';
import {create} from 'react-test-renderer';
import Register from '../../src/screens/Register';
import Wrapper from '../../src/helpers/Wrapper';

const component = create(Wrapper(<Register />));

describe('should render register', () => {
  test('matching snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
