import React, { useState, useEffect } from 'react';
import {View, Text, Image, FlatList } from 'react-native';
import Header from '../../home/HomeHeader';
import styles from './styles'
import api from '../../../services/api'


function PublicacoesScreen() {
  const [publications, setPublications] = useState([]);

  async function loadPublications(){
   const response = await api.get('/API/publicacoes/estabelecimento/1');
   setPublications(response.data)
   console.log(response.data)
  }

  useEffect(()=>{
    loadPublications();
  }, []);


  return (
    <View>
      <Header/>
        <FlatList 
          data={publications}
          keyExtractor={publication => String(publication.idPublicacao)}
          renderItem={({item: publication}) => (
            <View style={styles.publicationsBox}>
              <View style={styles.visivelBox}>
                <View style={styles.visivelFromBox}>
                  <Text style={styles.visivelFrom}>Visível a Partir de: </Text>
                  <Text style={styles.statsFrom}>{publication.dtPublicacao}</Text>
                </View>
                <View style={styles.visiveUntillBox}>
                  <Text style={styles.visivelUntil}>Disponível até: </Text>
                  <Text style={styles.statsUntil}>{publication.dtEncerramento}</Text>
                </View>
              </View>
              <Text></Text>
              <View style={styles.fotoBox}>
                <View style={styles.item}>
                  <Image
                    style={styles.itemFoto}
                    source={require('../../../assets/images/imagem.jpg')}
                  />
                  <Text>R$ {publication.anuncios.produtos.preco}</Text>
                </View>
                <View style={styles.item}>
                  <Image
                    style={styles.itemFoto}
                    source={require('../../../assets/images/imagem.jpg')}
                  />
                  <Text>R$ </Text>
                </View>
                <View style={styles.item}>
                  <Image
                    style={styles.itemFoto}
                    source={require('../../../assets/images/imagem.jpg')}
                  />
                  <Text>R$ </Text>
                </View>
              </View>
              <View style={styles.descBox}>
                <Text>
                  
                </Text>
              </View>
            </View>
        )}/>
    </View>
  );
}

export default PublicacoesScreen;
