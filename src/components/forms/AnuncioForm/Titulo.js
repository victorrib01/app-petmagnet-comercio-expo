import React, { Component } from 'react'
import {View, Text, TextInput, Button} from 'react-native';

export class Titulo extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const {values, handleChange} = this.props;
        return (
            <View>
                <Text>Coloque seu título:</Text>
                <TextInput
                    onChange={handleChange('titulo')}
                    defaultValue={values.titulo}
                />
                <Button
                    title='Continuar'
                    onPress={this.continue}
                />
            </View>
        )
    }
}

export default Titulo
