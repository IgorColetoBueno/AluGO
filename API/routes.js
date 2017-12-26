import pessoa from './controllers/pessoa';

export default (app) => {
    app.use('/pessoas',pessoa);
} 