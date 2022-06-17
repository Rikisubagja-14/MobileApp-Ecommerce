import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router';
const App = () => {
  return (
    // <Spalsh />
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
