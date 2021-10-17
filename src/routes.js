import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Home from './Pages/Home';
import Details from './Pages/Details';
import SingleAd from './Pages/SingleAd';

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Single Product" component={SingleAd} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
