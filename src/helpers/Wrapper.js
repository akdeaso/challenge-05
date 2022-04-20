import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/lib/integration/react';

import {persistedStore, store} from '../store';
import {navigationRef} from './navigate';

export default function Wrapper(child) {
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <PersistGate persistor={persistedStore}>{child}</PersistGate>
      </Provider>
    </NavigationContainer>
  );
}
