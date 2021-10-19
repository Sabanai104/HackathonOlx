import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './styles';

const CreateAd = () => {
  const [number, onChangeNumber] = React.useState(null);
  const [descriptionNumber, onChangeDescriptionNumber] = React.useState(null);
  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Título do anúncio*</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Ex: Samsung S9 novo na caixa"
          keyboardType="text"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Descrição*</Text>
        <TextInput
          style={styles.inputDescription}
          onChangeText={onChangeDescriptionNumber}
          value={descriptionNumber}
          placeholder="Ex: Samsung S9 novo na caixa com 128gb de memória, com caixa, todos os cabos e sem marcas de uso."
          keyboardType="text"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Categoria*</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Ex: Samsung S9 novo na caixa"
          keyboardType="text"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>CEP*</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Ex: Samsung S9 novo na caixa"
          keyboardType="text"
        />
      </View>
    </View>
  );
};

export default CreateAd;
