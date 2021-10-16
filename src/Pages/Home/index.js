import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Hello World</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
