import React from 'react';
import {View, Text, Button} from 'react-native';

import Header from './../home/HomeHeader';
import {TextInput} from 'react-native-gesture-handler';

const VisivelScreen = ({navigation}) => {
  return (
    <View>
      <Header />
      <View>
        <View>
          <Text>
            Informe o período que você deseja que o anúncio fique disponível
            para seus clientes.
          </Text>
        </View>
        <View>
          <Text>Visível a partir de: </Text>
          <TextInput></TextInput>
          <Text>Visível até: </Text>
          <TextInput></TextInput>
        </View>
        <View>
          <Text>4/4</Text>
      </View>
      </View>
    </View>
  );
}

export default VisivelScreen;
