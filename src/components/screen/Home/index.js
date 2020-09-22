import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import styles from './styles'

import Header from '../../home/HomeHeader';
import Date from '../../home/DateComponent';

import firebase from '../../../services/firebase'


function Home() {
  const [listAds, setListAds] = useState([]);

  useEffect(() => {
    firebase.database().ref('/crud').on('value', (snapshot) => {
      const list = [];
      snapshot.forEach((childItem) => {
        list.push({
          key: childItem.key,
          title: childItem.val().title,
          price: childItem.val().price,
          describe: childItem.val().describe,
          visibleFrom: childItem.val().visibleFrom,
          visibleTo: childItem.val().visibleTo,
        });
      });
      setListAds(list.length);
    });
  });
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
            <Text style={styles.statsNumber}>{listAds}</Text>
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