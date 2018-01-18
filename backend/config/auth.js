import passport from 'passport';

export default (app) => {
    app.use('/pessoas',pessoa);
    app.use('/imoveis',imovel);
} 