import React from 'react';
import ProductCard from '../../components/ProductCard';
import Navbar from '../../components/Navbar';
import data from '../../data';
import {ScrollView, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  return (
    <>
      <ScrollView>
        {data &&
          data.map(product => (
            <TouchableOpacity
              key={Math.random()}
              onPress={() => navigation.navigate('Details', {product})}>
              <ProductCard product={product} />
            </TouchableOpacity>
          ))}
      </ScrollView>
      <Navbar />
    </>
  );
};

export default Home;
