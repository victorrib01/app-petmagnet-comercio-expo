import React from 'react';
import {View, Text, Button} from 'react-native';

import Header from './../home/HomeHeader';
import { TextInput } from 'react-native-gesture-handler';

const FotoScreen = ({navigation}) => {
  return (
    <View>
      <Header />
      <View>
        <Text>
          Tire uma foto bem legal do seu produto, e informe o preço que deseja
          anunciar.
        </Text>
        <Text>Pode inserir até 3 Fotos.</Text>
      </View>
      <View>
          <Text>Foto</Text>
          <Button></Button>
      </View>
      <View>
          <Text>Preço</Text>
          <TextInput></TextInput>
      </View>
      <View>
          <Text>2/4</Text>
      </View>
    </View>
  );
}

export default FotoScreen;
