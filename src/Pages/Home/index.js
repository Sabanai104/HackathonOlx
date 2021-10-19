import React from 'react';
import ProductCard from '../../components/ProductCard';
import data from '../../data';
import {ScrollView, TouchableOpacity, View} from 'react-native';

import styles from './styles';

const Home = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
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
      </View>
    </>
  );
};

export default Home;
