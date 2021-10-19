import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Home from './Pages/Home';
import Details from './Pages/Details';
import SingleAd from './Pages/SingleAd';
import Profile from './Pages/Profile';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      barStyle={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => {
            return (
              <Image
                style={styles.Icon}
                source={require('../assets/olx.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Feed"
        component={}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => {
            return (
              <Image
                style={styles.Icon}
                source={require('../assets/chats.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name=""
        component={}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => {
            return (
              <Image
                style={styles.Icon}
                source={require('../assets/chats.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  Navbar: {
    backgroundColor: '#fff',
    width: '100%',
    height: '8%',
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'row',
  },
  MenuItem: {
    backgroundColor: '#fff',
  },
  Icon: {
    width: 66,
    height: '100%',
  },
});
