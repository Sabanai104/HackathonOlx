/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState, useContext} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import PremiumModal from '../../components/PremiunModal';
import InformationModal from '../../components/InformationModal';
import {Context} from '../../context/context';

import closeBox from '../../assets/closeBox.png';
import arrowLeft from '../../assets/arrowLeft.png';
import styles from './styles';

const LootBox = ({navigation}) => {
  const [openModal, setOpenModal] = useState(false);
  const {coin, settingCoin} = useContext(Context);
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [textPrize, setTextPrize] = useState('');
  const [cupomPrize, setCupomPrize] = useState('');
  const [visibleModal, setVisibleModal] = useState(false);

  const sortPrize = () => {
    if (coin > 0) {
      const randomNumber = Math.floor(Math.random() * 10);
      if (randomNumber > 0 && randomNumber <= 3) {
        setBackgroundColor('#AC63FA');
        setTextPrize('Você ganhou um cupom de desconto de 15%');
        setCupomPrize('OLXROXO');
      } else if (randomNumber > 3 && randomNumber <= 6) {
        setBackgroundColor('#FC9A4B');
        setTextPrize('Você ganhou um cupom de desconto de 30%');
        setCupomPrize('OLXLARANJA');
      } else {
        setBackgroundColor('#68EE92');
        setTextPrize('Você ganhou um cupom de desconto de 10%');
        setCupomPrize('OLXVERDE');
      }
      settingCoin(coin - 1);
      setOpenModal(true);
    } else {
      Alert.alert(
        'Ops Espere um pouco!',
        'Você não possue moedas suficientes!',
      );
    }
  };
  return (
    <View>
      <InformationModal
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
      />
      <PremiumModal
        openModal={openModal}
        backgroundModalColor={backgroundColor}
        closeModal={() => setOpenModal(false)}
        textPrize={textPrize}
        cupomPrize={cupomPrize}
      />
      <View style={styles.PurpleTop}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 'auto',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={arrowLeft} style={styles.arrowLeft} />
          </TouchableOpacity>
          <Text style={styles.TopText}>Espaço Verde</Text>
          <View style={{width: 50, height: 50}} />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={closeBox} resizeMode="contain" />
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={sortPrize}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Jogar</Text>
          </View>
        </TouchableOpacity>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View style={styles.iconesContainer}>
            <View style={styles.coinContainer}>
              <Image source={require('../../assets/coin1.png')} />
              <Text style={styles.CoinAmount}>{coin}X</Text>
            </View>
            <TouchableOpacity onPress={() => setVisibleModal(true)}>
              <Image
                resizeMode="contain"
                source={require('../../assets/interrogation.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LootBox;
