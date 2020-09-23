import React from 'react';
import { View } from 'react-native';

import Publicacoes from './Publicacoes'
import Header from '../../home/HomeHeader'
function Publications() {
  return (
    <View>
      <Header />
      <Publicacoes />
    </View>
  );
}

export default Publications;
