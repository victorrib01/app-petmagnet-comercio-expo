import React, { Component } from 'react';

//Import AnuncioForm components
import Titulo from './AnuncioForm/Titulo'
import Foto from './AnuncioForm/Foto'
import Descricao from './AnuncioForm/Descricao'
import Visivel from './AnuncioForm/Visivel'

import CallServer from '../../../../assets/helper/callBackEnd';


class AnuncioForm extends Component {
    state={
        step:1,
        titulo:"",
        visivel: "",
        foto: "",
        preco: "",
        descricao:""
    }

    //Go to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    //Go back to previous step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    //Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    callBackEnd = () => {
        const {titulo, visivel, foto, preco, descricao} = this.state;
        const values = {titulo, visivel, foto, preco, descricao};
        
        console.log(values);
    }

    render() {
        const {step} = this.state;
        const {titulo, visivel, foto, preco, descricao} = this.state;
        const values = {titulo, visivel, foto, preco, descricao};
        
        switch(step) {
            case 1:
                return(
                    <Titulo
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        callBackEnd={this.callBackEnd}
                        values={values}
                    />
                )
            case 2:
                return(
                    <Foto
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return(
                    <Descricao
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return(
                    <Visivel
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
        };
    };
};

export default AnuncioForm;