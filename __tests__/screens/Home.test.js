import * as React from 'react';
import {create} from 'react-test-renderer';
import Home from '../../src/screens/Home';
import Wrapper from '../../src/helpers/Wrapper';

jest.mock('@react-native-community/netinfo', () => ({}));

const component = create(Wrapper(<Home />));

describe('should render home', () => {
  test('matching snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
