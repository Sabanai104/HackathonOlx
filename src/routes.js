import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from './context/context';
const HomeStack = createNativeStackNavigator();
const GreenSpaceStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

import Home from './Pages/Home';
import Details from './Pages/Details';
import CreateAd from './Pages/CreateAd';
import Profile from './Pages/Profile';
import GreenSpace from './Pages/GreenSpace';
import LootBox from './Pages/LootBox';

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

const GreenSpaceStackNavigation = () => {
  return (
    <GreenSpaceStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <GreenSpaceStack.Screen name="GreenSpace" component={GreenSpace} />
      <GreenSpaceStack.Screen name="LootBox" component={LootBox} />
    </GreenSpaceStack.Navigator>
  );
};

const Routes = () => {
  return (
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
        <Tab.Screen name="Espaço Verde" component={GreenSpaceStackNavigation} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Routes;
