import React from 'react';
import { Text, View } from 'react-native';
// CARD - HEADER
function CartaoAnuncioHeader(props) {

    let end = props.estabelecimento.endereco;
    let compl_end = props.estabelecimento.complEndereco;

    if (compl_end != '') {
        compl_end = ' / ' + compl_end;
    }

    let end_completo_1 = end.logradouro + ', ' + end.numero + compl_end;
    let end_completo_2 = end.bairro + ' - ' + end.cidade + ' - ' + end.uf;
    let horario = '';

    let { estabelecimento } = props;

    // console.log('=======================================');
    // console.log(props);
    // console.log('7======================================');

    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#FFFFFE', borderBottomColor: '#E1E0DF', borderBottomWidth: 1 }}>
            {/* <View style={{ width: 78, alignItems: 'center', justifyContent: 'center' }}>
             <Text>IMG</Text>
          </View> */}
            <View style={{ width: '100%', height: 70, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{estabelecimento.nome}</Text>
                <Text style={{ fontSize: 14 }}>{end_completo_1}</Text>
                <Text style={{ fontSize: 14 }}>{end_completo_2}</Text>
                {/* <Text style={{ fontSize: 14 }}>{horario}</Text> */}
            </View>
        </View>
    )
}
export default CartaoAnuncioHeader;