import mongoose from 'mongoose';

export default (app) => {
    //Conexão com o MongoDB
    let db = mongoose.connect('mongodb://localhost:27017/AluGO',
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

    //Criação do servidor
    app.listen(9000, () => {
        console.log('Servidor express iniciado com sucesso!');
    })

}