import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15,
  },
  input: {
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  inputDescription: {
    height: 120,
    marginTop: 10,
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 8,
    textAlign: 'justify',
  },
  inputPicker: {
    height: 50,
    width: 150,
  },
  photoImage: {
    width: 'auto',
    height: 295,
  },
  checkbox: {
    alignSelf: 'center',
  },
});

export default styles;
