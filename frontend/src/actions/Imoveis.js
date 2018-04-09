import axios from 'axios';
import { BASE_URL } from '../constants/API';
import { toastr } from 'react-redux-toastr';
import { initialize } from 'redux-form'
import { PREVIUS, NEXT } from './ActionTypes';

const INITIAL_VALUES =
    {
        caracteristicas: [{
            chave: "12",
            valor: "Teste"
        }],
        teste: "Teste"
    };
axios.defaults.baseURL = BASE_URL;

export function nextPage() {
    return {
        type: NEXT
    }
}

export function previousPage() {
    return {
        type: PREVIUS
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

export function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`/imoveis/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function init() {
    return initialize('anunciarForm', INITIAL_VALUES);
}