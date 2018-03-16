import axios from 'axios';
import { BASE_URL } from '../constants/API';

axios.defaults.baseURL = BASE_URL;

export const refreshToken = (user) => {
    axios.post('/user/token')
}