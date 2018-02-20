import mongoose from 'mongoose';

export default (app) => {
    //Conexão com o MongoDB
    let db = mongoose.connect('mongodb://localhost:27017/alugo',
        {
            useMongoClient: true
        },
        function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('MongoDB conectado com sucesso!');
            }
        });

    mongoose.Promise = global.Promise;

    //Criação do servidor
    app.listen(process.env.PORT || 3000, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Servidor express iniciado com sucesso!');
    })

}