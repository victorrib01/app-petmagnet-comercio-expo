import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
export default CartaoAnuncioMidiasSociais;