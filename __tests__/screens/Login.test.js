import * as React from 'react';
import {create} from 'react-test-renderer';
import Login from '../../src/screens/Login';
import Wrapper from '../../src/helpers/Wrapper';

const component = create(Wrapper(<Login />));

describe('should render login', () => {
  test('matching snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
