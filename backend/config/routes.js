import pessoa from './../controllers/pessoa';
import imovel from './../controllers/imovel';
import user from './../controllers/user';

export default (app, passport) => {
    app.use('/pessoas', passport.authenticate('token', { session: false }), pessoa);
    app.use('/imoveis', passport.authenticate('token', { session: false }), imovel);
    app.use('/user', user);
} 