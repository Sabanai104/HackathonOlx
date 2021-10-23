import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function ProductCard(props) {
  const {product} = props;
  return (
    <View
      style={[
        styles.container,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          flexDirection: 'row',
        },
      ]}>
      <Image
        style={styles.ProductImage}
        source={{
          uri: 'https://www.petz.com.br/blog/wp-content/uploads/2021/03/piercing-para-cachorro-3.jpg',
        }}
      />
      <View>
        <Text>{product.Title}</Text>
        <Text style={styles.Texts.Price}>R${product.Price}</Text>
        <Text style={styles.Texts.Adress}>{product.Adress}</Text>
      </View>

      <Image style={styles.LeafImage} source={require('../assets/leaf.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    color: 'black',
  },
  ProductImage: {
    width: 128,
    height: 128,
    marginRight: 10,
  },
  LeafImage: {
    marginLeft: 'auto',
  },
  Texts: {
    Title: {},
    Price: {fontWeight: 'bold'},
    Adress: {fontWeight: '200'},
    color: 'black',
  },
});
