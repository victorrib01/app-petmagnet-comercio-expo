import React from 'react';
import { ScrollView } from 'react-native';

import styles from './styles'

//FORM IMPORTS
import { Formik } from 'formik';
import { TextInput, Button } from 'react-native-paper';
//import initialValues from './InitialValues';

//IMAGEPICKER IMPORT
import ImageComponent from './ImageComponent';
import Reducer from './Reducer';

const initialValues = {
    title: '',
    price: '',
    describe: '',
    visibleFrom: '',
    visibleUntil: '',
    image: ''
}

function FormFormik(){
    //const [state,dispatch] = useReducer( Reducer, initialValues);
    return(
        <Formik
            initialValues={initialValues}     onSubmit={values => console.log(values)}
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
                    {/* IMAGE COMPONENT */}
                    <Button
                    icon="add-a-photo" mode="contained" style={styles.button}
                    onPress={() => {this._pickImage(handleChange('image'))}}
                    >Pick an image from camera roll</Button>
                    {/* SUBMIT COMPONENT */}
                    <Button mode="contained" onPress={handleSubmit} style={styles.button}>Publicar</Button>
                </ScrollView>
        )}
        </Formik>
    )};
    

export default FormFormik;