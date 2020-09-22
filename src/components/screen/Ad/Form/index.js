import React, { Component } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { Formik } from 'formik';
import { Button, TextInput } from 'react-native-paper';
import { Keyboard, View } from 'react-native';
import validationSchema from './components/Validation'
import initialValues from './components/InitialValues'
import api from '../../../../services/api';
import styles from './styles'
import * as firebase from 'firebase';

export default class ClassFormFormik extends Component {
    async onSubmit(values) {
        //List of form values
        //backend boy = {description, price, title, visible_from, visible_to, estabilishment_id, image_url}
        console.log(values)
        this.sendForm(values);
        Keyboard.dismiss();
    }
    async sendForm(values){
        //firebase connection
        // await api.post(`/createAd`, {
        //     estabilishment_id: initialValues.estabilishment_id,
        //     title: values.title,
        //     price: values.price,
        //     description: values.describe,
        //     visible_from: values.visibleFrom,
        //     visible_to: values.visibleTo,
        //     image_url: values.image,
        // })
        //Heroku connection
        await api.post(`/API/anuncios/publicar`, {
            idEstabelecimento: 1,
            idColaborador: 1,
            titulo: values.title,
            descricao: values.describe,
            preco: values.price,
        })
        await this.uploadImage(values.image)
        .then(() => {
          Alert.alert("Success");
        })
        .catch((error) => {
          Alert.alert(error);
        });
    }
    async pickImage(handleChange) {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3]
        })
        //console.log(result)
        if (!result.cancelled) {
            handleChange(result.uri)
        }
    }
    //TODO - UPLOADIMAGE
    async uploadImage(uri){
        let formData = new FormData();
        const response = await fetch(uri);
        const blob = await response.blob();
        const id = 1

        formData.append("imageFile", blob, `ad_image_${id}`)
        
        await api.post('/API/anuncios/uploadImagem', {
            idEstabelecimento: 1,
            idAnuncio: 1,
            idProduto: 1
        })
        // const ref = firebase.storage().ref().child("images/" + imageName);
        // return ref.put(blob);
    }
    render() {
        return (
            <View>
                <Formik
                    validationSchema={validationSchema}
                    initialValues={initialValues}
                    onSubmit={this.onSubmit.bind(this)}>
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
                            {/* TITLE INPUT */}
                            <TextInput
                                theme={{
                                    colors: {
                                        primary: "#006FB2"
                                    }
                                }}
                                label="Titulo"
                                onChangeText={handleChange('title')}
                                placeholder="Um petisco para seu Dog!"
                                onBlur={handleBlur('title')}
                                value={values.title}
                            />
                            {/* PRICE INPUT */}
                            <TextInput
                                theme={{
                                    colors: {
                                    primary: "#006FB2"
                                }
                            }}
                            keyboardType={'numeric'}
                            label="Preço"
                            onChangeText={handleChange('price')}
                            placeholder="Exemplo: 98.99"
                            onBlur={handleBlur('price')}
                            value={values.price}
                        />
                            {/* DESCRIBE INPUT */}
                            <TextInput
                                theme={{
                                    colors: {
                                        primary: "#006FB2"
                                    }
                                }}
                                label="Descrição"
                                multiline
                                onChangeText={handleChange('describe')}
                                placeholder="Alimento para Cães sabor Frango Assado SPEED DOG Pacote 10."
                                onBlur={handleBlur('describe')}
                                value={values.describe}
                            />
                            {/* VISIBLEFROM INPUT */}
                            <TextInput
                                theme={{
                                    colors: {
                                        primary: "#006FB2"
                                    }
                                }}
                                label="Visível a partir de:"
                                onChangeText={handleChange('visibleFrom')}
                                placeholder="Utilize do padrão DD/MM. Exemplo: 05/09"
                                onBlur={handleBlur('visibleFrom')}
                                value={values.visibleFrom}
                            />
                            {/* VISIBLETO INPUT */}
                            <TextInput
                                theme={{
                                    colors: {
                                        primary: "#006FB2"
                                    }
                                }}
                                label="Visível até:"
                                onChangeText={handleChange('visibleTo')}
                                placeholder="Utilize do padrão DD/MM. Exemplo: 05/10"
                                onBlur={handleBlur('visibleTo')}
                                value={values.visibleTo}
                            />
                            {/* Image Picker INPUT */}
                            <Button
                                theme={{
                                    colors: {
                                        primary: "#006FB2"
                                    }
                                }}
                                mode="contained" style={styles.button}
                                onPress={() => { this._pickImage(handleChange('image')) }}>
                                Escolha uma imagem
                        </Button>
                            <Button
                                theme={{
                                    colors: {
                                        primary: "#108a00"
                                    }
                                }}
                                mode="contained" onPress={handleSubmit} style={styles.button}>Publicar</Button>
                        </View>
                    )}
                </Formik>
            </View>
        )
    }
}