import pessoa from './../controllers/pessoa';
import imovel from './../controllers/imovel';
import user from './../controllers/user';
export default (app) => {
    app.use('/pessoas', pessoa);
    app.use('/imoveis', imovel);
    app.use('/user', imovel);
} 