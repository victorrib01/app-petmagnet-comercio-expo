 import React from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import Header from '../../home/HomeHeader';
// import styles from './styles';
// import { ApiGET } from '../../../services/ApiGET';

import Publicacoes from './Publicacoes'
function Publications() {
  // const [publications, setPublications] = useState([]);

  // // async function loadPublications() {
  // //   const response = axios.get('https://petmagnet-api.herokuapp.com/API/estabelecimentos')
  // //   console.log(response.data)
  // //   // setPublications(response.data)
  // // }

  // async function deletarAnuncio(idAnuncio) {
  //   api.delete(`/API/anuncios/${idAnuncio}`)
  // }
  // let jsonAnuncios
  // try {
  //   jsonAnuncios = ApiGET({ endPoint: 'publicacoes/estabelecimento/1?encerrado=false' });
  //   //console.log(jsonAnuncios);
  // } catch (error) {
  //   console.log(error)
  // }
  // // let jsonAnuncios = ApiGET({ endPoint: '/API/publicacoes/estabelecimento/20?encerrado=false' });
  // // console.log(jsonAnuncios);

  // console.log("TAMANHO " + jsonAnuncios.length);

  // let produto;
  // for (let item in jsonAnuncios) {
  //   //console.log("BUMBA MEU BOI")
  //   //console.log(jsonAnuncios[item].anuncios[0]);
  //   let anuncios = jsonAnuncios[item].anuncios;
  //   for (let anuncio in anuncios) {
  //     let obj = anuncios[anuncio];
  //     console.log(">>\r\n");
  //     console.log(obj.descricao);
  //     let produtos = obj.produtos;
  //     produto = obj.produtos[0];
  //     console.log(produto.idProduto);
  //     /*for(let produto in produtos){
  //     console.log(produto);
  //     }*/
  //     //console.log(obj);
  //   }
  //   //break;
  // }



  return (
    <Publicacoes />
    // <View style={styles.publicacaoView}>
    //   <Header />
    //   <FlatList
    //     data={jsonAnuncios}
    //     keyExtractor={(item) => item.anuncios.idAnuncio}
    //     renderItem={({ item }) => (
    //       <View style={styles.publicationsBox}>
    //         <View style={styles.visivelBox}>
    //           <View style={styles.visivelFromBox}>
    //             <Text style={styles.visivelFrom}>Visível a Partir de: </Text>
    //             <Text style={styles.statsFrom}>{item.dtPublicacao}</Text>
    //           </View>
    //           <View style={styles.visiveUntillBox}>
    //             <Text style={styles.visivelUntil}>Disponível até: </Text>
    //             <Text style={styles.statsUntil}>{item.dtEncerramento}</Text>
    //           </View>
    //         </View>
    //         <TouchableOpacity style={styles.btnEnviar} onPress={() => { deletarAnuncio(item.idAnuncio) }}>
    //           <Icon name="trash-alt" size={26} />
    //         </TouchableOpacity>
    //         <Text>{item.anuncios.titulo}</Text>
    //         <View style={styles.fotoBox}>
    //           <View style={styles.item}>
    //             <Image
    //               style={styles.itemFoto}
    //               source={require('../../../assets/images/imagem.jpg')}
    //             />
    //             <Text>R$ {item.}</Text>
    //           </View>
    //         </View>
    //         {/* Description Area */}
    //         <View style={styles.descBox}>
    //           <Text style={styles.textDesc}>
    //             {item.}
    //           </Text>
    //         </View>
    //       </View>
    //     )} />
    // </View>
  );
}

export default Publications;
