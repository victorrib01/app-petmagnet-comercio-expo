import React from 'react';
import { View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CartaoAnuncioHeader from './Cartao/CartaoAnuncioHeader'
import CartaoAnuncioTitulo from './Cartao/CartaoAnuncioTitulo'
import CartaoAnuncioProdutos from './Cartao/CartaoAnuncioProdutos'
import CartaoAnuncioDescricao from './Cartao/CartaoAnuncioDescricao'
import CartaoAnuncioMidiasSociais from './Cartao/CartaoAnuncioMidiasSocias'

function AnuncioCard(props) {
   // CARD

   function CartaoAnuncio(props) {

      console.log('============== CARTAO ANUNCIO CARD ===============');
      console.log(props);


      // Obtém todos os Anúncios atribuídos à Publicação recebida.
      var anuncios = props.publicacao.anuncios.map(function (item) {
         return {
            id: item.idAnuncio,
            titulo: item.titulo,
            descricao: item.descricao,
            produtos: item.produtos
         };
      });

      return (
         <View style={{ paddingBottom: 10, paddingTop: 1, backgroundColor: '#C5C5C5' }}>
            <FlatList
               data={anuncios}
               renderItem={(anuncio) => {
                  return (
                     <View >
                        <CartaoAnuncioHeader estabelecimento={props.publicacao.estabelecimento} />
                        <CartaoAnuncioTitulo anuncios={anuncio.item} />
                        <CartaoAnuncioProdutos produtos={anuncio.item.produtos} />
                        <CartaoAnuncioDescricao anuncios={anuncio.item} />
                        <CartaoAnuncioMidiasSociais />
                     </View>
                  )
               }}>
            </FlatList>
         </View>
      )
   }

   

   // CARD - MÍDIAS SOCIAIS
   function CartaoAnuncioMidiasSociais(props) {

      // console.log('=======================================');
      // console.log(props); 
      // console.log('11======================================');   

      return (
         <View style={{ flexDirection: 'row', width: '100%', height: 60, backgroundColor: '#F3F2F0', borderBottomColor: '#DBDBDB', borderBottomWidth: 1 }}>
            <View style={{ width: 70, height: '100%', alignItems: 'center', justifyContent: 'center' }}>
               <Icon name="whatsapp" size={22} color="green" />
            </View>
            <View style={{ width: 50, height: '100%', alignItems: 'center', justifyContent: 'center' }}>
               <Icon name="shopping-cart" size={22} color="#E98E1E" />
            </View>
         </View>
      )
   }

   return (
      <CartaoAnuncio publicacao={props.publicacao} />
   )
}

export { AnuncioCard };