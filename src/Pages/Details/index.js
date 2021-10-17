import React from 'react';
// import {View, ScrollView} from 'react-native';
// import ProductCard from '../../components/ProductCard';
import Navbar from '../../components/Navbar';
// import SingleAd from '../SingleAd';
// import data from '../../data';
import SingleAd from '../SingleAd';

const Details = ({navigation, route}) => {
  const {product} = route.params;
  return (
    <>
      <SingleAd product={product} />
      <Navbar />
    </>
  );
};

export default Details;
