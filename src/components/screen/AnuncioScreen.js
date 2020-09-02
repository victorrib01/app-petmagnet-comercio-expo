import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

import Header from './../home/HomeHeader';

const AnuncioScreen = () => {
  return (
    <View>
      <Header />
      <View style={styles.container}>
        <View style={styles.textBox}>
          <Text style={styles.textQuestion}>
            O que você gostaria de anunciar?
          </Text>
          <Text style={styles.textDesc}>
            Digite um título para chamar a atenção dos clientes, exemplo:
            "Aproveite esses Ótimos Preços"
          </Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.titulo}>Título</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, width:300}}
            maxLength= {45}
            defaultValue='Um petisco para seu Dog!'
          />
          <Text style={styles.paginate}>1/4</Text>
        </View>
        <View style={styles.confirmButton}>
          <Button title="Confirmar" />
        </View>
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
