/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  TouchableOpacity,
} from 'react-native';
import caixaAberta from '../assets/caixaAberta.png';

const PremiumModal = ({
  openModal,
  closeModal,
  backgroundModalColor,
  textPrize,
  cupomPrize,
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={openModal}>
        <View style={styles.centeredView}>
          <View
            style={{
              margin: 20,
              backgroundColor: backgroundModalColor,
              borderRadius: 10,
              paddingHorizontal: 24,
              paddingTop: 32,
              alignItems: 'center',
              shadowColor: '#000',
              width: 330,
              height: 430,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.25,
              shadowRadius: 8,
              elevation: 5,
            }}>
            <View
              style={{
                width: '100%',
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity onPress={closeModal}>
                <Text style={styles.closeButton}>X</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.prizeText}>{textPrize}</Text>
            <Text style={styles.text}>{cupomPrize}</Text>
            <Image
              style={{marginTop: 48}}
              source={caixaAberta}
              resizeMode="contain"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  prizeText: {
    marginTop: 35,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  text: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default PremiumModal;
