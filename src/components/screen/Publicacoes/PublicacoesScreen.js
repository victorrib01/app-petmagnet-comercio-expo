import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';

import Header from '../../home/HomeHeader';

import styles from './Styles'

const PublicacoesScreen = ({navigation}) => {
  return (
    <View>
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
                source={require('../../imgs/imagem_exemplo.jpg')}
              />
              <Text>R$ 38,49</Text>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemFoto}
                source={require('../../imgs/imagem_exemplo.jpg')}
              />
              <Text>R$ 42,50</Text>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemFoto}
                source={require('../../imgs/imagem_exemplo.jpg')}
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
                source={require('../../imgs/imagem_exemplo.jpg')}
              />
              <Text>R$ 38,49</Text>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemFoto}
                source={require('../../imgs/imagem_exemplo.jpg')}
              />
              <Text>R$ 42,50</Text>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemFoto}
                source={require('../../imgs/imagem_exemplo.jpg')}
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
                source={require('../../imgs/imagem_exemplo.jpg')}
              />
              <Text>R$ 38,49</Text>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemFoto}
                source={require('../../imgs/imagem_exemplo.jpg')}
              />
              <Text>R$ 42,50</Text>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemFoto}
                source={require('../../imgs/imagem_exemplo.jpg')}
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
                source={require('../../imgs/imagem_exemplo.jpg')}
              />
              <Text>R$ 38,49</Text>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemFoto}
                source={require('../../imgs/imagem_exemplo.jpg')}
              />
              <Text>R$ 42,50</Text>
            </View>
            <View style={styles.item}>
              <Image
                style={styles.itemFoto}
                source={require('../../imgs/imagem_exemplo.jpg')}
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

export default PublicacoesScreen;
