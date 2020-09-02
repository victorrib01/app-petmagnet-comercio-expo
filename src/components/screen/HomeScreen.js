import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Header from './../home/HomeHeader';
import Date from '../home/DateComponent'

const HomeScreen = () => {
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
            <Text style={styles.statsNumber}>1</Text>
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignItems: 'center',
  },
  content: {
    marginTop: 50,
    padding: 50,
    backgroundColor: '#006FB2',
    borderBottomRightRadius: 50
  },
  textContent: {
    color: '#FDCF05',
    fontSize: 18,
    textAlign: 'center',
  },
  statsContent: {
    flexDirection: 'row',
  },
  stats: {
    alignItems: "center",
    padding: 20,
  },
  statsText:{
    alignItems: "center",
    fontSize: 14
  },
  statsNumber: {
    fontSize: 30
  }
});
export default HomeScreen;
