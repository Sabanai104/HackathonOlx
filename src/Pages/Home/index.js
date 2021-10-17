import React from 'react';
import ProductCard from '../../components/ProductCard';
import Navbar from '../../components/Navbar';
// import SingleAd from '../SingleAd';
import data from '../../data';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  return (
    <>
      <ScrollView>
        {data &&
          data.map(product => (
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
              <ProductCard product={product} />
            </TouchableOpacity>
          ))}
      </ScrollView>
      <Navbar />

      {/* <View>
        <Text>Hello World</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Text>Clique aqui</Text>
        </TouchableOpacity>
      </View> */}
    </>
  );
};

export default Home;
