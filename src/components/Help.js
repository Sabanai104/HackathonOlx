import React from 'react';
import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';

export default function InformationModal(props) {
  const {visibleModal, setVisibleModal} = props;
  return (
    <Modal transparent={true} visible={visibleModal}>
      <View style={styles.Background}>
        <View style={styles.Modal}>
          <View>
            <TouchableOpacity
              style={styles.CloseButton}
              onPress={() => setVisibleModal(false)}>
              <Text style={styles.CloseText}>x</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.Text}>
            A Compra Segura é uma nova solução da OLX que garante a segurança e
            praticidade da transação. A partir de sua criação a OLX passa a
            aceitar compras através da plataforma, aproximando-se de um modelo
            de e-commerce, onde a transação é assegurada pela empresa.
          </Text>
          <Text style={styles.Text}>
            O Compra Segura é um produto oferecido através da plataforma OLX
            Pay. Além dela, o comprador pode optar também pela disponibilidade
            de testes dos produtos em postos de troca oficiais.
          </Text>
          <View>
            <Text style={styles.Text}>
              Além disso, ao optar pela Compra Segura, você estará colaborando
              com a Iniciativa Verde, na qual 1% de cada venda é destinada para
              fundo da OLX, direcionado ao plantio de árvores através da ONG
              Team Trees.
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  Background: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  CloseButton: {
    alignSelf: 'flex-end',
    marginRight: 18,
    marginTop: 18,
    marginBottom: 7,
    padding: 0.5,
  },
  CloseText: {
    fontSize: 25,
    fontWeight: '500',
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
    marginBottom: '5%',
    textAlign: 'justify',
  },
  Category: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 8,
  },
  CategoryText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 9,
  },
  CategoryImage: {},
});
