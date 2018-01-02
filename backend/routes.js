import pessoa from './controllers/pessoa';
import imovel from './controllers/imovel';

export default (app) => {
    app.use('/pessoas',pessoa);
    app.use('/imoveis',imovel);
} 