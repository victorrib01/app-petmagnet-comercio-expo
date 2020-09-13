import React, { useState, useEffect } from 'react';
import {View, Text, ScrollView, Image, FlatList} from 'react-native';
import Header from '../../home/HomeHeader';
import styles from './Styles'
import api from '../../../services/api'

function PublicacoesScreen() {
  const [publications, setPublications] = useState([]);

  async function loadPublications(){
    const response = await api.get();
    setPublications(response.data);
  }

  useEffect(()=>{
    loadPublications();
  }, []);

  return (
    <View>
      <Header />
      <ScrollView>
        <FlatList
          data={publications}
          keyExtractor={publications => String(publications.produtos.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: publications }) =>(
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
              <Text style={styles.titleBox}>{publications.titulo}</Text>
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
                  <Text>R$ {publications.preco}</Text>
                </View>
              </View>
              <View style={styles.descBox}>
                <Text>
                  {publications.descricao}
                </Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}

export default PublicacoesScreen;
