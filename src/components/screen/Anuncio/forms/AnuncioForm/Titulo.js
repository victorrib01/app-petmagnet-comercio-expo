import React, { Component } from 'react'
import {View, Text, TextInput, Button} from 'react-native';

export class Titulo extends Component {    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    confirm = e => {
        e.preventDefault();
        this.props.callBackEnd();
    }
    render() {
        const {values, handleChange} = this.props;

        return (
            <View>
                <Text>Coloque seu título:</Text>
                <TextInput
                    placeholder= "Título"
                    onChange={handleChange('titulo')}
                    defaultValue={values.titulo}
                />
                <Button
                    title='Continuar'
                    onPress={this.continue}
                />
                <Button
                    title='Confirmar'
                    onPress={this.confirm}
                />
            </View>
        )
    }
}

export default Titulo
