import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles'

import Header from '../../home/HomeHeader';
import Date from '../../home/DateComponent'

import { ApiGET } from '../../../services/ApiGET';

const Home = () => {
  let jsonAnuncios = ApiGET({ endPoint: 'publicacoes/estabelecimento/1?encerrado=false' });
  console.log(jsonAnuncios);
  return (
    <View>
      <Header />
      <View style={styles.container}>
        <Date style={styles.date} />
        <View style={styles.content}>
          <Text style={styles.textContent}>
            Resumo dos seus Anúncios dos últimos 30 dias
          </Text>
        </View>
        <View style={styles.statsContent}>
          <View style={styles.stats}>
            <Text style={styles.statsText}>Ativos</Text>
            <Text style={styles.statsNumber}>{jsonAnuncios.length}</Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.statsText}>Programados</Text>
            <Text style={styles.statsNumber}>1</Text>
          </View>
          <View style={styles.stats}>
            <Text style={styles.statsText}>Vencidos</Text>
            <Text style={styles.statsNumber}>2</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Home;