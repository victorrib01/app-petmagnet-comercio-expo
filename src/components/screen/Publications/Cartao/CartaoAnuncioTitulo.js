import React from 'react';
import { Text, View } from 'react-native';
// CARD - TÍTULO
   function CartaoAnuncioTitulo(props) {

      // console.log('=======================================');
      // console.log(props); 
      // console.log('11======================================');   

      return (
         <View style={{ width: '100%', height: 40, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#3949AB' }}>{props.anuncios.titulo}</Text>
         </View>
      )
   }
   export default CartaoAnuncioTitulo;