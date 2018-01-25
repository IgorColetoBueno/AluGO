//Importações
import config from '../config';
import axios from 'axios';

//Criação da instância do axios
var instance = axios.create({
    baseURL: config.BASE_ADRESS,
    timeout: 3000,
    headers: { 'Authorization': config.TOKEN }
});

//Classe com as funções necessárias
class Imoveis {

    all() {
        instance
            .get("/imoveis")
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                return err;
            })
    }

    save(obj) {
        if (obj.Id == 0) {
            instance
                .post("/imoveis", obj)
                .then((result) => {
                    return result;
                })
                .catch((err) => {
                    return err;
                });
        }
        else {
            instance
                .put(`/imoveis/${obj.Id}`, obj)
                .then((result) => {
                    return result;
                })
                .catch((err) => {
                    return err;
                });
        }
    }

    delete(id) {
        instance
            .delete(`imoveis/${id}`)
            .then((result) => {
                return result;
            })
            .catch((err) => {
                return err;
            });
    }
}