import axios from 'axios';

const api = axios.create({
    baseURL:'https://petmagnet-api.herokuapp.com/API/anuncios/colaborador/1?idEstabelecimento=1'
})