import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';

import Header from './../home/HomeHeader';

const PublicacoesScreen = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Header />
      <ScrollView>
        <View style={styles.publicacaoBox}>
          <View style={styles.visivelBox}>
            <View style={styles.visivelFromBox}>
              <Text style={styles.visivelFrom}>Visível a Partir de: </Text>
              <Text style={styles.statsFrom}>15.06.2020</Text>
            </View>
            <View style={styles.visiveUntillBox}>
              <Text style={styles.visivelUntil}>Disponível até: </Text>
              <Text style={styles.statsUntil}>20.06.2020</Text>
            </View>
          </View>
          <Text style={styles.textBox}>Grande Promoção de Ração para seu Cachorro</Text>
          <View style={styles.fotoBox}>
            <View style={styles.item}>
              <Image
                style={styles.itemFoto}
                source={require('../imgs/imagem_exemplo.jpg')}
              />
              <Text>R$ 38,49</Text>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemFoto}
                source={require('../imgs/imagem_exemplo.jpg')}
              />
              <Text>R$ 42,50</Text>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemFoto}
                source={require('../imgs/imagem_exemplo.jpg')}
              />
              <Text>R$ 40,99</Text>
            </View>
          </View>
          <View style={styles.descBox}>
            <Text>
              Alimento para Cães Sabor Frango Assado SPEED DOG Pacote 10,1kg
            </Text>
          </View>
        </View>
        <View style={styles.publicacaoBox}>
          <View style={styles.visivelBox}>
            <View style={styles.visivelFromBox}>
              <Text style={styles.visivelFrom}>Visível a Partir de: </Text>
              <Text style={styles.statsFrom}>15.06.2020</Text>
            </View>
            <View style={styles.visiveUntillBox}>
              <Text style={styles.visivelUntil}>Disponível até: </Text>
              <Text style={styles.statsUntil}>20.06.2020</Text>
            </View>
          </View>
          <Text style={styles.textBox}>Grande Promoção de Ração para seu Cachorro</Text>
          <View style={styles.fotoBox}>
            <View style={styles.item}>
              <Image
                style={styles.itemFoto}
                source={require('../imgs/imagem_exemplo.jpg')}
              />
              <Text>R$ 38,49</Text>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemFoto}
                source={require('../imgs/imagem_exemplo.jpg')}
              />
              <Text>R$ 42,50</Text>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemFoto}
                source={require('../imgs/imagem_exemplo.jpg')}
              />
              <Text>R$ 40,99</Text>
            </View>
          </View>
          <View style={styles.descBox}>
            <Text>
              Alimento para Cães Sabor Frango Assado SPEED DOG Pacote 10,1kg
            </Text>
          </View>
        </View>
        <View style={styles.publicacaoBox}>
          <View style={styles.visivelBox}>
            <View style={styles.visivelFromBox}>
              <Text style={styles.visivelFrom}>Visível a Partir de: </Text>
              <Text style={styles.statsFrom}>15.06.2020</Text>
            </View>
            <View style={styles.visiveUntillBox}>
              <Text style={styles.visivelUntil}>Disponível até: </Text>
              <Text style={styles.statsUntil}>20.06.2020</Text>
            </View>
          </View>
          <Text style={styles.textBox}>Grande Promoção de Ração para seu Cachorro</Text>
          <View style={styles.fotoBox}>
            <View style={styles.item}>
              <Image
                style={styles.itemFoto}
                source={require('../imgs/imagem_exemplo.jpg')}
              />
              <Text>R$ 38,49</Text>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemFoto}
                source={require('../imgs/imagem_exemplo.jpg')}
              />
              <Text>R$ 42,50</Text>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemFoto}
                source={require('../imgs/imagem_exemplo.jpg')}
              />
              <Text>R$ 40,99</Text>
            </View>
          </View>
          <View style={styles.descBox}>
            <Text>
              Alimento para Cães Sabor Frango Assado SPEED DOG Pacote 10,1kg
            </Text>
          </View>
        </View>
        <View style={styles.publicacaoBox}>
          <View style={styles.visivelBox}>
            <View style={styles.visivelFromBox}>
              <Text style={styles.visivelFrom}>Visível a Partir de: </Text>
              <Text style={styles.statsFrom}>15.06.2020</Text>
            </View>
            <View style={styles.visiveUntillBox}>
              <Text style={styles.visivelUntil}>Disponível até: </Text>
              <Text style={styles.statsUntil}>20.06.2020</Text>
            </View>
          </View>
          <Text style={styles.textBox}>Grande Promoção de Ração para seu Cachorro</Text>
          <View style={styles.fotoBox}>
            <View style={styles.item}>
              <Image
                style={styles.itemFoto}
                source={require('../imgs/imagem_exemplo.jpg')}
              />
              <Text>R$ 38,49</Text>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemFoto}
                source={require('../imgs/imagem_exemplo.jpg')}
              />
              <Text>R$ 42,50</Text>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemFoto}
                source={require('../imgs/imagem_exemplo.jpg')}
              />
              <Text>R$ 40,99</Text>
            </View>
          </View>
          <View style={styles.descBox}>
            <Text>
              Alimento para Cães Sabor Frango Assado SPEED DOG Pacote 10,1kg
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  view:{
    marginBottom: 60
  },
  publicacaoView: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  publicacaoBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FFFFFE',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginBottom: 10,
    elevation: 2,
  },
  visivelBox: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#FCFCFC',
    height: 60,
    borderColor: '#000000',
    borderBottomWidth: 0.3
  },
  visivelFromBox: {
    flexDirection: 'row',
    marginBottom: -25
  },
  visiveUntillBox: {
    flexDirection: 'row',
  },
  fotoBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    alignSelf: 'stretch',
    textAlign: 'center',
    backgroundColor: '#FFFFFE',
    height: 140,
    marginBottom: 10
  },
  text: {
    zIndex: 5,
  },
  item: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemFoto: {
    width: 100,
    height: 100,
  },
  descBox: {
    backgroundColor: '#E6F5FF',
    borderTopRightRadius: 25,
    height: 60,
  },
})

export default PublicacoesScreen;
