import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export default function Navbar() {
  return (
    <View style={styles.Navbar}>
      <View style={styles.MenuItem}>
        <Image style={styles.Icon} source={require('../assets/mais.jpg')} />
      </View>
      <View style={styles.MenuItem}>
        <Image style={styles.Icon} source={require('../assets/chats.jpg')} />
      </View>
      <View style={styles.MenuItem}>
        <Image
          style={styles.Icon}
          source={require('../assets/inseriranuncio.jpg')}
        />
      </View>
      <View style={styles.MenuItem}>
        <Image
          style={styles.Icon}
          source={require('../assets/minhaconta.jpg')}
        />
      </View>
      <View style={styles.MenuItem}>
        <Image style={styles.Icon} source={require('../assets/espaço.jpg')} />
      </View>
      <View style={styles.MenuItem}>
        <Image style={styles.Icon} source={require('../assets/mais.jpg')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Navbar: {
    backgroundColor: '#ff0',
    width: '100%',
    height: '8%',
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'row',
  },
  MenuItem: {
    backgroundColor: 'red',
  },
  Icon: {
    width: 68,
    height: '100%',
  },
});
