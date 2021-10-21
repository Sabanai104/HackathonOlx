import React, {useState} from 'react';
import {
  TouchableOpacity,
  Modal,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import InformationModal from '../../components/InformationModal';

const GreenSpace = () => {
  const [progress, setProgress] = useState(15);
  const [visibleModal, setVisibleModal] = useState(false);
  return (
    <View>
      <InformationModal
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
      />

      <View style={styles.PurpleTop}>
        <Text style={styles.TopText}>Espaço Verde</Text>
      </View>
      <View style={styles.ProgressBar}>
        <View style={ProgressedBar(progress)} />
      </View>

      <View style={styles.StatusText}>
        <Text style={styles.StatusText.Progress}>Progresso atual</Text>
        <Text style={styles.StatusText.Percentage}>{progress}%</Text>
      </View>
      <Image
        style={styles.Tree}
        source={require('../../assets/arvore1-min.png')}
      />
      <View style={styles.Bottom}>
        <View style={styles.BottomLeft}>
          <Image source={require('../../assets/coin1.png')} />
          <Text style={styles.CoinAmount}>1X</Text>
        </View>
        <View style={styles.BottomRight}>
          <TouchableOpacity onPress={() => setVisibleModal(true)}>
            <Image
              style={styles.interogation}
              source={require('../../assets/interrogation.png')}
            />
          </TouchableOpacity>
          <Image
            style={styles.trophy}
            source={require('../../assets/trophy.png')}
          />
        </View>
      </View>
    </View>
  );
};

function ProgressedBar(progress) {
  if (progress && progress <= 100 && progress >= 0) {
    return StyleSheet.create({
      backgroundColor: '#F88324',
      height: 20,
      width: progress + '%',
      borderRadius: 10,
    });
  }
  if (progress < 0) {
    return StyleSheet.create({
      backgroundColor: '#F88324',
      height: 20,
      width: '0%',
      borderRadius: 10,
    });
  }
  if (progress > 0) {
    return StyleSheet.create({
      backgroundColor: '#F88324',
      height: 20,
      width: '100%',
      borderRadius: 10,
    });
  }
}

const styles = StyleSheet.create({
  All: {backgroundColor: '#ffffff'},
  PurpleTop: {
    backgroundColor: '#6D0AD6',
    height: '18%',
  },
  TopText: {
    color: '#ffffff',
    fontSize: 16,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 24,
  },
  ProgressBar: {
    backgroundColor: '#ffffff',
    borderColor: '#3D3D3D',
    borderWidth: 0.8,
    alignSelf: 'center',
    width: '72%',
    height: 20,
    marginTop: -10,
    borderRadius: 10,
  },
  ProgressedBar: {
    backgroundColor: '#F88324',
    height: 20,
    // width: this.progress + '%',
    borderRadius: 10,
  },
  StatusText: {
    alignItems: 'center',
    marginTop: 35,
    Progress: {
      fontSize: 16,
      color: '#000000',
      fontWeight: 'bold',
    },
    Percentage: {
      fontSize: 24,
      color: '#20D659',
      fontWeight: 'bold',
    },
  },
  Tree: {
    // width: '100%',
    marginTop: 26,
    marginBottom: 'auto',
  },
  Bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#000000',
  },
  BottomRight: {
    marginTop: 'auto',
    alignItems: 'center',
  },
  BottomLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 10,
    marginLeft: 16,
  },
  trophy: {
    // marginRight: 16,
  },
  interogation: {
    // marginRight: 21,
  },
  CoinAmount: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default GreenSpace;
