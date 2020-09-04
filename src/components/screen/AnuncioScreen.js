import React from 'react';
import {View, StyleSheet} from 'react-native';

import Header from './../home/HomeHeader';

import AnuncioForm from '../forms/AnuncioForm';

const AnuncioScreen = () => {
  return (
    <View>
      <Header />
      <View style={styles.container}>
        <AnuncioForm/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  textBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 20,
    marginTop: 20,
  },
  textQuestion: {
    fontSize: 20,
  },
  textDesc: {
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  inputBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 20,
    marginTop: 20,
    marginBottom: 70,
  },
  titulo: {
    fontSize: 20,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 20,
  },
  confirmButton: {
    borderRadius: 50,
  },
});
export default AnuncioScreen;
