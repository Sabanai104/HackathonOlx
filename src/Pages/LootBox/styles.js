import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  PurpleTop: {
    backgroundColor: '#6D0AD6',
    height: 150,
  },
  TopText: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 24,
  },
  arrowLeft: {
    width: 35,
    height: 35,
    marginBottom: 24,
  },
  imageContainer: {
    marginTop: 118,
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 200,
  },
  buttonContainer: {
    marginTop: 35,
    width: 190,
    height: 52,
    borderRadius: 50,
    backgroundColor: '#F88324',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 21,
  },
  iconesContainer: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CoinAmount: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default styles;
