import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, Button } from 'react-native';
import Header from '../../home/HomeHeader';
import styles from './styles'
import api from '../../../services/api'


function Publications() {
  const [publications, setPublications] = useState([]);

  //firebase connection
  async function loadPublications() {
    const response = await api.get('/listAds');
    setPublications(response.data)
    //console.log(response.data)
    //{"id":"","title":"","estabilishment_id":"","description":"","visible_to":"","price":"","visible_from":""}

  }

  async function deleteAd() {
    await api.delete(`/deleteAd`, {
      ad_id: '7Z2Mzz49trWmdTePfey1'
    })
  }

  useEffect(() => {
    loadPublications();
  }, []);

  return (
    <View style={styles.publicacaoView}>
      <Header />
      <FlatList
        data={publications}
        keyExtractor={publication => String(publication.id)}
        renderItem={({ item: publication }) => (
          <View style={styles.publicationsBox}>
            <View style={styles.visivelBox}>
              <View style={styles.visivelFromBox}>
                <Text style={styles.visivelFrom}>Visível a Partir de: </Text>
                <Text style={styles.statsFrom}>{publication.visible_from}</Text>
              </View>
              <View style={styles.visiveUntillBox}>
                <Text style={styles.visivelUntil}>Disponível até: </Text>
                <Text style={styles.statsUntil}>{publication.visible_to}</Text>
              </View>
              <Button onPress={deleteAd}>Deletar</Button>
            </View>
            <Text></Text>
            <View style={styles.fotoBox}>
              <View style={styles.item}>
                <Image
                  style={styles.itemFoto}
                  source={require('../../../assets/images/imagem.jpg')}
                />
                <Text>R$ {publication.price}</Text>
              </View>
            </View>
            <View style={styles.descBox}>
              <Text style={styles.textDesc}>
                {publication.description}
                {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. */}
              </Text>
            </View>
          </View>
        )} />
    </View>
  );
}

export default Publications;
