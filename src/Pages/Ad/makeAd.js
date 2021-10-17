import React, {useState} from 'react';
import {View, Text, CheckBox} from 'react-native';

const MakeAd = () => {
  const [isSelected, setSelection] = useState(false);
  const [isMapSelected, setMapSelection] = useState(false);
  return (
    <>
      <View>
        <Text>CEP*</Text>
        <CheckBox value={isSelected} onValueChange={setSelection} />
        <Text>Compra Segura</Text>
        {/* {isSelected ? <Text>Eu gostaria de usar um posto de troca</Text> : null} */}
      </View>
    </>
  );
};

export default MakeAd;
