import React from 'react';
import { Text, View } from 'react-native';
// CARD - DESCRIÇÃO
function CartaoAnuncioDescricao(props) {
    return (
        <View style={{ width: '100%', height: 62, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E6F5FF', borderBottomColor: '#E1E0DF', borderBottomWidth: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{props.anuncios.descricao}</Text>
        </View>
    )
}
export default CartaoAnuncioDescricao;