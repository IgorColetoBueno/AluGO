import pessoa from './../controllers/pessoa';
import imovel from './../controllers/imovel';
import user from './../controllers/user';

export default (app, passport) => {
    app.use('api/pessoas', pessoa);
    app.use('api/imoveis', imovel);
    app.use('api/user', user);
} 