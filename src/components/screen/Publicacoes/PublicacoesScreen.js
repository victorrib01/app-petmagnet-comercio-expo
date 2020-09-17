import React, { useState, useEffect } from 'react';
import {View, Text, ScrollView, Image, FlatList} from 'react-native';
import Header from '../../home/HomeHeader';
import styles from './Styles'
import axios from 'axios';
//import api from '../../../services/api'

function PublicacoesScreen() {
  const [publications, setPublications] = useState([
  {
      idPublicacao : 1,
      dtPublicacao :  '2020-09-14' ,
      dtEncerramento :  '2020-10-14' ,
      estabelecimento : {
        cnpj :  46781973000106 ,
        nome :  'PetShop do Bairro LTDA' ,
        complEndereco :  '' ,
        endereco : {
          logradouro :  'Rua Abaetetuba' ,
          numero :  123 ,
          bairro :  'Jardim Califórnia' ,
          cidade :  'Barueri' ,
          pais :  'BR' ,
          cep :  '06409-100' ,
          latitude :  '-23,4935611' ,
          longitude :  '-46,8959407' ,
          uf :  'SP' 
      },
        idEstabelecimento : 1
    },
      anuncios : [
      {
          idAnuncio : 1,
          idEstabelecimento : 1,
          idColaborador : 1,
          titulo :  'Título do anuncio' ,
          descricao :  'descricao do anuncio' ,
          produtos : [
          {
              idProduto : 1,
              descricao :  'descricao do produto' ,
              preco : 99,
              imagem :  'imagem anuncio' 
          }
        ]
      }
    ],
      links : []
  },

  ]);

  return (
    <View>
      <Header />
      <ScrollView>
        <FlatList
          data={publications}
          keyExtractor={publications => String(publications.anuncios.idAnuncio)}
          showsVerticalScrollIndicator={false}
          //onEndReached={loadPublications}
          //onEndReachedThreshold={0.2}
          renderItem={({ item: publication }) =>(
            <View style={styles.publicacaoBox}>
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
              <Text style={styles.titleBox}>{publication.titulo}</Text>
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
                  <Text>R$ {publication.anuncios.produtos[0].preco}</Text>
                </View>
              </View>
              <View style={styles.descBox}>
                <Text>
                  {publication.descricao}
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
