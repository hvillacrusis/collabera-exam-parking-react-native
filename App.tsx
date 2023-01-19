/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {RecoilRoot} from 'recoil';
import AppNavigator from './src/navigation/AppNavigator';
function App(): JSX.Element {
  return (
    <RecoilRoot>
      <AppNavigator />
    </RecoilRoot>
  );
}

export default App;
