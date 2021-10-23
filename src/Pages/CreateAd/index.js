import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';

const CreateAd = () => {
  const [number, onChangeNumber] = React.useState(null);
  const [descriptionNumber, onChangeDescriptionNumber] = React.useState(null);
  const [cepNumber, onChangeCepNumber] = React.useState(null);
  const [category, onChangeCategory] = React.useState(null);
  const [agree, setAgree] = React.useState(false);
  const [agreeGreenSpace, setAgreeGreenSpace] = React.useState(false);

  return (
    <>
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
              keyboardType="default"
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
              keyboardType="default"
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Categoria*</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeCategory}
              value={category}
              placeholder="Ex: Móveis"
              keyboardType="default"
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
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={agree}
              tintColors={{true: '#613D97', false: 'black'}}
              onChange={() => setAgree(!agree)}
            />
            <Text style={styles.checkboxText}>Compra Segura</Text>
            <Image
              style={styles.helpImage}
              source={require('../../assets/Question.png')}
            /> 
          </View>
          {agree ? (
            <>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={agreeGreenSpace}
                  onChange={() => setAgreeGreenSpace(!agreeGreenSpace)}
                  tintColors={{true: '#613D97', false: 'black'}}
                />
                <Text style={styles.greenCheckboxText}>
                  Eu gostaria de usar um Posto de Troca
                </Text>
                <Image
                  style={styles.leafImage}
                  source={require('../../assets/leaf.png')}
                />
              </View>
              {agreeGreenSpace ? (
                <>
                  <Image
                    style={styles.mapsImage}
                    source={require('../../assets/maps.png')}
                  />
                </>
              ) : (
                <View style={styles.space} />
              )}
            </>
          ) : (
            <View style={styles.space} />
          )}
          <View style={styles.button}>
            <Pressable
              style={styles.CreateAd}
              onPress={() => console.log('produto cadastrado')}>
              <Text style={styles.buttonText}>Enviar anúncio</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default CreateAd;
