import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

//FORM IMPORTS
import { Formik } from 'formik';
import { TextInput, Button } from 'react-native-paper';

//IMAGEPICKER IMPORT
import ImageComponent from './ImageComponent'

//BACKEND IMPORTS
import callServer from '../../../../services/callBackEnd'

class FormFormik extends Component {
    
    //onSubmit FUNCTION
    onSubmit(values) {
        //List of form values
        console.log(callServer(values));
    }
    render(){
        
        return(
        <Formik
            initialValues={{
                title: '',
                price: '',
                describe: '',
                visibleFrom: '',
                visibleUntil: '',
                image: ''
            }}
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
                    <ImageComponent/>
                {/* SUBMIT BUTTON */}
                <Button mode="contained" onPress={handleSubmit} style={styles.button}>Publicar</Button>
            </ScrollView>
            )}
        </Formik>
        )
    }
    //GET PERMISSIONS FROM CAMERA
    
    //FINISH GET PERMISSIONS FROM CAMERA
};
    

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