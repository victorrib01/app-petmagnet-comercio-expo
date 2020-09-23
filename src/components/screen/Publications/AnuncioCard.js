import React from 'react';
import { View, FlatList } from 'react-native';
import CartaoAnuncioHeader from './Cartao/CartaoAnuncioHeader'
import CartaoAnuncioTitulo from './Cartao/CartaoAnuncioTitulo'
import CartaoAnuncioProdutos from './Cartao/CartaoAnuncioProdutos'
import CartaoAnuncioDescricao from './Cartao/CartaoAnuncioDescricao'
import CartaoAnuncioMidiasSociais from './Cartao/CartaoAnuncioMidiasSocias'

function AnuncioCard(props) {
   // CARD
   function CartaoAnuncio(props) {
      // console.log('============== CARTAO ANUNCIO CARD ===============');
      // console.log(props);
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

   return (
      <CartaoAnuncio publicacao={props.publicacao} />
   )
}

export { AnuncioCard };