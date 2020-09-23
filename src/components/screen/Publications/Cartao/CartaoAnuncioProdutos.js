import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';
// CARD - PRODUTOS
function CartaoAnuncioProdutos(props) {

   var produtos = props.produtos.map(function (item) {
      return {
         idProduto: item.idProduto,
         descricao: item.descricao,
         preco: item.preco,
         imagem: item.imagem,
         imagem_byte: item.imagem_byte
      };
   });

   // console.log('=======================================');
   // console.log(props);
   // console.log('1======================================');

   return (
      <View style={{ height: 220, backgroundColor: '#FFFFFE', alignItems: 'center', justifyContent: 'space-around', paddingBottom: 5, borderBottomColor: '#E1E0DF', borderBottomWidth: 1 }}>
         <FlatList
            horizontal
            data={produtos}
            keyExtractor={(item) => item.idProduto.toString()}
            renderItem={(produto) => {
               return (
                  <View style={{ flexDirection: 'column', width: 127, height: '100%', backgroundColor: '#FFFFFE', marginHorizontal: 1 }}>
                     <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={{ uri: `data:image/png;base64,${produto.item.imagem_byte}` }} style={{ width: 160, height: 160 }} />
                     </View>
                     <View style={{ flexGrow: 0, alignItems: 'center', height: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#3949AB' }}>R$ {produto.item.preco}</Text>
                     </View>
                  </View>
               )
            }}>
         </FlatList>
      </View>
   )
}
export default CartaoAnuncioProdutos;