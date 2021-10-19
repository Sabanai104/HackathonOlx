import React from 'react';
import {View} from 'react-native';
// import {View, ScrollView} from 'react-native';
// import ProductCard from '../../components/ProductCard';
// import SingleAd from '../SingleAd';
// import data from '../../data';
import SingleAd from '../SingleAd';
import styles from './styles';

const Details = ({navigation, route}) => {
  const {product} = route.params;
  return (
    <>
      <View style={styles.container}>
        <SingleAd product={product} />
      </View>
    </>
  );
};

export default Details;
