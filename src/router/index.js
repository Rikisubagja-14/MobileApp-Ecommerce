import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {GetStated, Spalsh} from '../pages';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Spalsh} />
      <Stack.Screen name="GetStarted" component={GetStated} />
    </Stack.Navigator>
  );
};

export default Router;
