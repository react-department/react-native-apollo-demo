import React, { Suspense } from 'react';
import { StatusBar, View } from 'react-native';

import AppNavigator from './navigation/AppNavigator';

function App() {
  return (
    <Suspense fallback={<View />}>
      <StatusBar backgroundColor="black" />
      <AppNavigator />
    </Suspense>
  );
}

export default App;
