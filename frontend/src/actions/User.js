import axios from 'axios';
import Cookies from 'universal-cookie';
import { BASE_URL } from '../constants/API';
import { toastr } from 'react-redux-toastr';
import { CREATE } from './ActionTypes';

axios.defaults.baseURL = BASE_URL;
const cookie = new Cookies();

export function create(user) {
    user = {...user, nota : 7};
    return dispatch => axios.post('/pessoas', user)
        .then(response => {
            toastr.success('Usuário criado com sucesso, você está pronto para anunciar se quiser!')      
            login(response.data)      
        })
        .catch(err => {
            toastr.error('Erro!', err)
        })

}

export function login(user) {
    return dispatch => axios.post('/user/token', user)
        .then(response => {
            if (!response.status) {
                return;
            }
           generateToken(response.data.token)
            //Informa que a operação deu certo
            toastr.success('Login realizado com sucesso, você está pronto para anunciar se quiser!')

        })
        .catch(err => {
            console.log(err)
            toastr.error('Erro ao realizar o login!', err, {})
        })

}

export function generateToken(token){
     //Define a expiração do token
     let expiration = new Date()
     expiration.setHours(expiration.getHours() + 1)
     //insere o token
     cookie.set('tokenAluGO', token, {
         path: '/',
         expires: expiration
     });
}