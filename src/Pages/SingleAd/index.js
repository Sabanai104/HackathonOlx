/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Button, Text, StyleSheet, Image, Pressable} from 'react-native';
const SingleAd = props => {
  const {product} = props;
  const [datePub, setDatePub] = useState('DD/MM');
  const [valDonated, setValDonated] = useState(product.Price * 0.1);

  return (
    <View style={styles.container}>
      <View style={{flex: 2, alignItems: 'center'}}>
        {/* <Text>Hello details!</Text> */}

        <Text style={styles.Title}>{product.Title}</Text>
        <Image
          style={styles.ProductImage}
          source={{
            uri: 'https://www.petz.com.br/blog/wp-content/uploads/2021/03/piercing-para-cachorro-3.jpg',
          }}
        />
      </View>
      <View style={{flex: 1.5}}>
        <View style={styles.PriceGreen}>
          <Text style={styles.PriceText}>R$ {product.Price}</Text>
          <View
            style={{marginLeft: 'auto', display: 'flex', flexDirection: 'row'}}>
            <Text style={{color: '#20D659', paddingRight: 10}}>
              Vendedor Verde
            </Text>
            <Image
              style={styles.LeafImage}
              source={require('../../assets/leaf.png')}
            />
          </View>
        </View>

        <View>
          <Text style={{paddingBottom: 10}}>Publicado em {datePub}</Text>
          <Text style={{color: '#20D659', paddingBottom: 10}}>
            Com essa compra R$ {valDonated} serão doados para a Team Trees
          </Text>
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 0.5,
              width: '100%',
            }}></View>
        </View>
      </View>
      <View style={{flex: 2}}>
        <Text style={styles.Description}>Descrição</Text>
        <Text style={{paddingTop: 10}}>
          Produto Novo
          {'\n'}
          Produção Própria
          {'\n'}
          Pra saber mais chama no inbox bb
        </Text>
      </View>
      <View>
        <Pressable
          style={styles.CompraItem}
          onPress={() => console.log(typeof (product.Price / 10))}>
          <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>Comprar</Text>
        </Pressable>
        {/* <Button
          title="Comprar"
          color="#F88324"
          onPress={() => console.log('batatinha 1 2 3')}
          style={styles.CompraItem}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
  Title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  ProductImage: {
    width: '60%',
    height: '80%',
    marginRight: 10,
  },
  PriceText: {
    fontSize: 26,
  },
  PriceGreen: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  Description: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  CompraItem: {
    width: '40%',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    backgroundColor: '#F88324',
    alignSelf: 'center',
  },
  LeafImage: {},
});
export default SingleAd;
