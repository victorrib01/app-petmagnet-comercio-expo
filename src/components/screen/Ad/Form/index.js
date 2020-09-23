import React, { Component } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { Formik } from 'formik';
import { Button, TextInput } from 'react-native-paper';
import { Keyboard, ScrollView, View, Alert } from 'react-native';
import validationSchema from './components/Validation'
import initialValues from './components/InitialValues'
import styles from './styles'
import api from '../../../../services/Api'

export default class Form extends Component {

    async onSubmit(values) {
        this.createAd(values)
        Keyboard.dismiss();
    }

    async createAd(values) {
        await api.post('anuncios', {
            idEstabelecimento: 1,
            idColaborador: 1,
            titulo: values.title,
            descricao: values.describe,
            produtos: [
                {
                    descricao: values.describe,
                    preco: values.price,
                    image_byte: values.image
                }
            ]
        })
        console.log(values)
        await this.uploadImage(values.image, values)
            .then(() => {
                Alert.alert("Success");
            })
            .catch((error) => {
                Alert.alert(error)
            })
    }
    //TODO - UPLOADIMAGE
    async uploadImage(uri, values) {
        const response = await fetch(uri);
        const blob = await response.blob();
        values.image = blob

    }

    async pickImage(handleChange) {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3]
        })
        //console.log(result)
        if (!result.cancelled) {
            const response = await fetch(result.uri);
            const blob = await response.blob();
            handleChange(blob)
        }
    }

    render() {
        return (
            <ScrollView style={styles.form}>
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
                            {/* <TextInput
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
                            /> */}
                            {/* VISIBLETO INPUT */}
                            {/* <TextInput
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
                            /> */}
                            {/* NUMBER INPUT */}
                            {/* <TextInput
                                theme={{
                                    colors: {
                                        primary: "#006FB2"
                                    }
                                }}
                                label="Número para contato:"
                                onChangeText={handleChange('number')}
                                placeholder="Utilize do padrão 11 99999 9999. Exemplo: 11987654321"
                                onBlur={handleBlur('number')}
                                value={values.number}
                            /> */}
                            {/* <DatePicker handleChange={handleChange} /> */}
                            {/* Image Picker INPUT */}
                            <Button
                                theme={{
                                    colors: {
                                        primary: "#006FB2"
                                    }
                                }}
                                mode="contained" style={styles.button}
                                onPress={() => { this.pickImage(handleChange('image'), values) }}>
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
            </ScrollView>
        )
    }
}