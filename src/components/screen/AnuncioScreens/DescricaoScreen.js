import React from 'react';
import {View, Text, Button} from 'react-native';

import Header from './../home/HomeHeader';
import {TextInput} from 'react-native-gesture-handler';

const DescricaoScreen = ({navigation}) => {
  return (
    <View>
      <Header />
      <View>
        <Text>
          Informe alguns detalhes do produto anunciado para ajudar na decisão
          dos clientes
        </Text>
        <View>
          <Text>Descrição do Produto</Text>
          <TextInput></TextInput>
        </View>
        <View>
          <Text>3/4</Text>
      </View>
      </View>
    </View>
  );
}

export default DescricaoScreen;
