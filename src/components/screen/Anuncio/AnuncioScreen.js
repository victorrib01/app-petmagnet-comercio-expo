import React from 'react';
import { View } from 'react-native';

import Header from '../../home/HomeHeader';
import SimpleForm from './simpleForm/ClassFormFormik';

class AnuncioScreen extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <SimpleForm />
      </View>
    );
  }
}

export default AnuncioScreen;