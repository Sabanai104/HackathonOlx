import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';

export default function Profile({navigation}) {
  const name = 'Millena';
  const amountDonated = 324.05;

  return (
    <View style={styles.container}>
      <View style={styles.ProfileUser}>
        <Image
          style={styles.ProfilePicture}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Eo_circle_grey_letter-m.svg/2048px-Eo_circle_grey_letter-m.svg.png',
          }}
        />
        <Text></Text>
        <Text>Na OLX desde Outubro de 2018</Text>
      </View>
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 0.5,
          width: '100%',
        }}></View>
      <View>
        <Image
          style={styles.DonateInfo}
          source={require('../../assets/amount-donated.jpg')}
        />
        <Text>Esse usuário já doou R$ 240,08 para a ONG Team Trees</Text>
        <Pressable onPress={() => console.log('pera romana')}>45645</Pressable>
      </View>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
    },
    ProfileUser: {},
    ProfilePicture: {
      width: '20%',
      height: '20%',
    },
    DonateInfo: {
      width: '20%',
      height: '20%',
    },
  });
}
