import mongoose from 'mongoose';

export default (app) => {
    //Conexão com o MongoDB para o backend
    //    let db = mongoose.connect('mongodb://localhost:27017/AluGO',
    let db = mongoose.connect('mongodb://dbalugo:8+8AwChE[_5cV@mongo_alugo:27017/alugo',
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

    const port = 3000 || process.env.PORT;
    //Criação do servidor
    app.listen(port, (err) => {
        if (err) {
            console.log(err)
        }
        console.log(`Servidor express iniciado com sucesso na porta ${port}!`);
    })

}