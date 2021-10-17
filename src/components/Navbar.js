import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function Navbar({navigation}) {
  return (
    <View style={styles.Navbar}>
      <View style={styles.MenuItem}>
        <Image style={styles.Icon} source={require('../assets/olx.png')} />
      </View>
      <View style={styles.MenuItem}>
        <Image style={styles.Icon} source={require('../assets/chats.png')} />
      </View>
      <View style={styles.MenuItem}>
        <Image
          style={styles.Icon}
          source={require('../assets/inseriranuncio.png')}
        />
      </View>
      <View style={styles.MenuItem}>
        <Image
          style={styles.Icon}
          source={require('../assets/minhaconta.png')}
        />
      </View>
      <View style={styles.MenuItem}>
        <Image style={styles.Icon} source={require('../assets/verde.png')} />
      </View>
      <View style={styles.MenuItem}>
        <Image style={styles.Icon} source={require('../assets/mais.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Navbar: {
    backgroundColor: '#fff',
    width: '100%',
    height: '8%',
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'row',
  },
  MenuItem: {
    backgroundColor: '#fff',
  },
  Icon: {
    width: 66,
    height: '100%',
  },
});
