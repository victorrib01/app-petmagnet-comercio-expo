import {StyleSheet} from 'react-native';

import {publicacaoBox, visivelBox, fotoBox, descBox} from '../../../assets/helper/Colors';

export default StyleSheet.create({
    view:{
        marginBottom: 60,
    },
    publicacaoView: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    publicacaoBox: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        textAlign: 'center',
        marginTop: 5,
        backgroundColor: publicacaoBox,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        marginBottom: 10,
        elevation: 2,
    },
    visivelBox: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: visivelBox,
        height: 60,
        borderColor: '#000000',
        borderBottomWidth: 0.3
    },
    visivelFromBox: {
        flexDirection: 'row',
        marginBottom: -25
    },
    visiveUntillBox: {
        flexDirection: 'row',
    },
    fotoBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        alignSelf: 'stretch',
        textAlign: 'center',
        backgroundColor: fotoBox,
        height: 140,
        marginBottom: 10
    },
    text: {
        zIndex: 5,
    },
    item: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemFoto: {
        width: 100,
        height: 100,
    },
    descBox: {
        backgroundColor: descBox,
        borderTopRightRadius: 25,
        height: 60,
    },
});
