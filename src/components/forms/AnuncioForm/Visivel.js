import React, { Component } from 'react'
import {View, Text, Button} from 'react-native';

export class Visivel extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        return (
            <View>
                <Text>Hello Visivel</Text>
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

export default Visivel
