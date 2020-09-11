import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

//FORM IMPORTS
import { Formik } from 'formik';
import { TextInput, Button } from 'react-native-paper';

//CAMERA IMPORTS
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

//BACKEND IMPORTS
import callServer from '../../../../services/callBackEnd'

//FORM VALUES
const initialValues = {
    title: '',
    price: '',
    describe: '',
    visibleFrom: '',
    visibleUntil: '',
    image: ''
}

class FormFormik extends Component {

    //onSubmit FUNCTION
    onSubmit(values) {
        //List of form values
        console.log(callServer(values));
    }
    state = {
        image: null,
    };
    render(){
        let { image } = this.state;
        return(
        <Formik
            initialValues={initialValues}
            onSubmit={this.onSubmit.bind(this)}
        >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
            <ScrollView>
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
                {/* IMAGE BUTTON */}
                <Button
                    theme={{
                        colors: {
                            primary: "#006FB2"
                        }
                    }}
                    mode="contained"
                    style={styles.imageButton}
                    onPress={() => {this._pickImage(handleChange('image'))}}
                    >
                        Adicione uma imagem
                </Button>
                {/* SUBMIT BUTTON */}
                <Button mode="contained" onPress={handleSubmit} style={styles.button}>Publicar</Button>
            </ScrollView>
            )}
        </Formik>
        )
    }
    //GET PERMISSIONS FROM CAMERA
    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    };

    _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            });
            if (!result.cancelled) {
            this.setState({ image: result.uri });
            }
            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };
};
    //FINISH GET PERMISSIONS FROM CAMERA

const styles = StyleSheet.create({
    button: {
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 50,
    },
    imageButton: {
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
});

export default FormFormik;