import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Header from '../../home/HomeHeader';
import styles from './styles'
import firebase from '../../../services/firebase'
import Icon from 'react-native-vector-icons/AntDesign';


function Publications() {
  //-------------- DEPRICATED --------------
  // const [publications, setPublications] = useState([]);

  // //firebase connection
  // async function loadPublications() {
  //   const response = await api.get('/listAds');
  //   setPublications(response.data)
  //   console.log(response.data.length)
  //   //console.log(response.data)
  //   //{"id":"","title":"","estabilishment_id":"","description":"","visible_to":"","price":"","visible_from":""}

  // }

  // async function deleteAd(ad_id) {
  //   await api.delete(`/deleteAd`, {
  //     ad_id: ad_id
  //   })
  // }

  // useEffect(() => {
  //   loadPublications();
  // }, []);
  //------------------------------------------
  const [listAds, setListAds] = useState(null);

  useEffect(() => {
    try {
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
        setListAds(list);
      })

    } catch (error) {
      alert(error);
    }
  }, [])

  function delFire(key) {
    firebase.database().ref('/crud/' + key).remove()
  }

  return (
    <View style={styles.publicacaoView}>
      <Header />
      <FlatList
        data={listAds}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.publicationsBox}>
            <View style={styles.visivelBox}>
              <View style={styles.visivelFromBox}>
                <Text style={styles.visivelFrom}>Visível a Partir de: </Text>
                <Text style={styles.statsFrom}>{item.visibleFrom}</Text>
              </View>
              <View style={styles.visiveUntillBox}>
                <Text style={styles.visivelUntil}>Disponível até: </Text>
                <Text style={styles.statsUntil}>{item.visibleTo}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.btnEnviar} onPress={() => { delFire(item.key) }}>
              <Icon name="delete" size={20} />
            </TouchableOpacity>
            <Text></Text>
            <View style={styles.fotoBox}>
              <View style={styles.item}>
                <Image
                  style={styles.itemFoto}
                  source={{
                    uri: `${item.image_url}`,
                  }}
                />
                <Text>R$ {item.price}</Text>
              </View>
            </View>
            <View style={styles.descBox}>
              <Text style={styles.textDesc}>
                {item.describe}
                {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. */}
              </Text>
            </View>
          </View>
        )} />
    </View>
  );
}

export default Publications;
