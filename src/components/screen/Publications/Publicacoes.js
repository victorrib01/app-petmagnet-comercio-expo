import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { ApiGET } from '../../../services/ApiGET';
import { AnuncioCard } from './AnuncioCard';
import AsyncStorage from '@react-native-community/async-storage';

export default function Publicacoes() {
  const [userRegistro, setUserRegistro] = useState(null);

  async function getObterPublicacoesProximas() {

    const userRegistro = await AsyncStorage.getItem('userData')
      .then(() => {
        // console.log('============= REGISTRO ==============');
        // console.log(userRegistro);
      });
  }

  getObterPublicacoesProximas();

  jsonAnuncios = ApiGET({ endPoint: 'publicacoes/estabelecimento/1?encerrado=false' });

  // console.log('============= $$$ PUBLICAÇÕES $$$ ===============');
  // console.log(jsonAnuncios)

  return (
    <View >
      <FlatList
        style={{height:'86.5%'}}
        data={jsonAnuncios}
        keyExtractor={(item) => item.idPublicacao.toString()}
        renderItem={(publicacao) => <AnuncioCard publicacao={publicacao.item} />} >
      </FlatList>
    </View>
  );
}
