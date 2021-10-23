import { StyleSheet } from 'react-native';

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
  mapsImage: {
    marginTop: '5%',
    marginBottom: '5%',
    width: 'auto',
    height: 250,
  },
  checkboxText: {
    fontSize: 17,
    fontWeight: 'bold',
    position: 'absolute',
    top: '10%',
    marginLeft: '9%',
  },
  greenCheckboxText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#86D940',
    position: 'absolute',
    top: '10%',
    marginLeft: '9%',
  },
  checkboxContainer: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    width: '100%',
    marginBottom: '5%',
  },
  CreateAd: {
    width: '90%',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    backgroundColor: '#F88324',
    alignSelf: 'center',
  },
  buttonText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 17,
    color: '#fff',
  },
  space: {
    marginBottom: '7%',
  },
  leafImage: {
    position: 'absolute',
    marginLeft: 335,
    alignSelf: 'center',
  },
  helpImage: {
    width: 15,
    height: 15,
    marginLeft: 128,
    alignSelf: 'center',
    top: '30%',
  },
});

export default styles;
