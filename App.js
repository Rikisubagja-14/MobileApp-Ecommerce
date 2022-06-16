import React from 'react';
import {GetStated} from './src/pages';
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
