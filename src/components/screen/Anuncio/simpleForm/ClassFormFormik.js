import React, { Component } from 'react'
import * as ImagePicker  from 'expo-image-picker';
import { Formik } from 'formik';
import { Button, TextInput } from 'react-native-paper';
import { Alert, Keyboard, View, StyleSheet } from 'react-native';

import initialValues from './InitialValues'

export default class ClassFormFormik extends Component {
    onSubmit(values) {
        //List of form values
        console.log(values);
        //Alert.alert(JSON.stringify(values));
        Keyboard.dismiss();
    }
    
    async _pickImage (handleChange) {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3]
        })
        //console.log(result)
        if (!result.cancelled) {
            handleChange(result.uri)
        }
    }
    render() {
        return (
            <View style={[styles.container, styles.content]}>
                <Formik 
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
                        {/* VISIBLEUNTIL INPUT */}
                        <TextInput
                            theme={{
                                colors: {
                                    primary: "#006FB2"
                                }
                            }}            
                            label="Visível até:"
                            onChangeText={handleChange('visibleUntil')}
                            placeholder="Utilize do padrão DD/MM. Exemplo: 05/10"
                            onBlur={handleBlur('visibleUntil')}
                            value={values.visibleUntil}
                        />
                        {/* Image Picker INPUT */}
                        <Button
                            theme={{
                                colors: {
                                    primary: "#006FB2"
                                }
                            }}  
                            mode="contained" style={styles.button}
                            onPress={() => {this._pickImage(handleChange('image'))}}>
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
const styles = StyleSheet.create({
    container: {
        
    },
    content: {
        
    },
    button: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 35,
        padding: 5
    }
});