import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BottomNavigator from '../components/molecules/BottomNavigator';
import {
  Chat,
  Chatting,
  GetStated,
  Home,
  Login,
  Profile,
  Register,
  Spalsh,
  UploadPhoto,
} from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="Splash"
        options={{headerShown: false}}
        component={Spalsh}
      />
      <Stack.Screen
        name="Register"
        options={{headerShown: false}}
        component={Register}
      />
      <Stack.Screen
        name="GetStarted"
        options={{headerShown: false}}
        component={GetStated}
      />
      <Stack.Screen
        name="Login"
        options={{headerShown: false}}
        component={Login}
      />
      <Stack.Screen
        name="UploadPhoto"
        options={{headerShown: false}}
        component={UploadPhoto}
      />
      <Stack.Screen
        name="MainApp"
        options={{headerShown: false}}
        component={MainApp}
      />
      <Stack.Screen
        name="Chatting"
        options={{headerShown: false}}
        component={Chatting}
      />
    </Stack.Navigator>
  );
};

export default Router;
