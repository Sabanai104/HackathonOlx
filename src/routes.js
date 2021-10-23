import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from './context/context';
const HomeStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

import Home from './Pages/Home';
import Details from './Pages/Details';
import CreateAd from './Pages/CreateAd';
import Profile from './Pages/Profile';
import GreenSpace from './Pages/GreenSpace';

const HomeStackNavigation = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="HomePage" component={Home} />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
};

const Routes = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarIconStyle: {display: 'none'},
            tabBarLabelPosition: '',
            tabBarLabelStyle: {
              fontWeight: 'bold',
              fontSize: 10,
            },
            headerShown: false,
            tabBarActiveTintColor: 'purple',
          }}>
          <Tab.Screen name="Home" component={HomeStackNavigation} />
          <Tab.Screen name="Inserir um anúncio" component={CreateAd} />
          <Tab.Screen name="Minha Conta" component={Profile} />
          <Tab.Screen name="Espaço Verde" component={GreenSpace} />
          {/* <Tab.Screen name="Details" component={Details} /> */}
          {/* <Tab.Screen name="Single Product" component={SingleAd} />
        <Tab.Screen name="Account" component={Profile} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Routes;
