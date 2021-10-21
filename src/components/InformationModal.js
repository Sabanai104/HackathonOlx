import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function InformationModal(props) {
  const {visibleModal, setVisibleModal} = props;
  return (
    <Modal transparent={true} visible={visibleModal}>
      <View style={styles.Modal}>
        <View>
          <TouchableOpacity
            style={styles.CloseButton}
            onPress={() => setVisibleModal(false)}>
            <Text style={styles.CloseText}>x</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.Text}>
          Esse é um espaço de recompensas do espaço verde. Para conseguir um
          token, você precisacultivar uma arvore por completo.
        </Text>
        <Text style={styles.Text}>
          Cultivando ávores digitais,você ajuda a plantar mais arvores na vida
          real,ajudando a ONG Team Trees.
        </Text>
        <View>
          <Text style={styles.Text}>
            O sistema de recompensa pode sortear os seus itens, tendo eles 3
            categorias.
          </Text>
          <View style={styles.Category}>
            <Image
              source={require('../assets/circuloVerde.png')}
              style={styles.CategoryImage}
            />
            <Text style={styles.CategoryText}>Incomum</Text>
          </View>
          <View style={styles.Category}>
            <Image
              source={require('../assets/circuloRoxo.png')}
              style={styles.CategoryImage}
            />
            <Text style={styles.CategoryText}>Raro</Text>
          </View>
          <View style={styles.Category}>
            <Image
              source={require('../assets/circuloLaranja.png')}
              style={styles.CategoryImage}
            />
            <Text style={styles.CategoryText}>Lendário</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  CloseButton: {
    alignSelf: 'flex-end',
    marginRight: 18,
    marginTop: 18,
    marginBottom: 7,
  },
  CloseText: {
    fontSize: 25,
    fontWeight: '500',
    fontFamily: 'Nunito',
    color: '#000',
  },
  Modal: {
    backgroundColor: '#FFFFFF',
    maxWidth: '85%',
    alignSelf: 'center',
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: '40%',
  },
  Text: {
    fontSize: 16,
    color: '#000',
  },
  Category: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  CategoryText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 9,
  },
  CategoryImage: {},
});
