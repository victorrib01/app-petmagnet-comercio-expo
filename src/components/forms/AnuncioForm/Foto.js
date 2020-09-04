import React, { Component } from 'react'
import {View, Text, Button } from 'react-native';

export class Foto extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {values, handleChange} = this.props;
        return (
            <View>
                <Text>Hello Foto</Text>
                <Button
                    title='Continuar'
                    onPress={this.continue}
                />
                <Button
                    title='Voltar'
                    onPress={this.back}
                />
            </View>
        )
    }
}

export default Foto
