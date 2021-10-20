import React from 'react';
import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import CheckBox from 'react-native-check-box';
import styles from './styles';

const CreateAd = () => {
  const [number, onChangeNumber] = React.useState(null);
  const [descriptionNumber, onChangeDescriptionNumber] = React.useState(null);
  const [cepNumber, onChangeCepNumber] = React.useState(null);
  const [category, onChangeCategory] = React.useState(null);
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

  return (
    <View>
      <ScrollView>
        <Image
          style={styles.photoImage}
          source={require('../../assets/incluir-fotos.jpeg')}
        />
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
            multiline={true}
            placeholder="Ex: Samsung S9 novo na caixa com 128gb de memória, com caixa, todos os cabos e sem marcas de uso."
            keyboardType="text"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Categoria*</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeCategory}
            value={category}
            placeholder="Ex: Móveis"
            keyboardType="text"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>CEP*</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeCepNumber}
            value={cepNumber}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputContainer}>
          {/* <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateAd;
