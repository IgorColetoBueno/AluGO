import Pessoa from '../entities/pessoa';
import User from '../entities/user';
class PessoaDAO {
    constructor() {

    }
    save(req, res) {
        let model = new Pessoa(req.body);
        //Criando um objeto de usuário
        let user = new User({
            name: `${req.body.nome} ${req.body.sobrenome}`,
            username: req.body.email,
            password: req.body.password
        });
        //Encriptando a senha
        user.hashPassword(user.password, (err, encPass) => {
            user.password = encPass;
        });
        //Executa o salvamento
        user
            .save()
            .then((userCreated) => {
                if (!userCreated) {
                    return res
                        .status(404)
                        .json({ status: false, data: {} })
                }
                //Insere o id do usuário na pessoa
                model.user = userCreated._id;
                //salva a pessoa vinculada ao usuário
                model
                    .save()
                    .then((pessoaCreated) => {
                        if (!pessoaCreated) {
                            return res
                                .status(404)
                                .json({ status: false, data: {} })
                        }
                        return res
                            .status(201)
                            .json({ status: true, data: pessoaCreated })
                    })
                    .catch(err => res
                        .status(500)
                        .json({ status: false, data: err })
                    )
                //finaliza o salvamento da pessoa vinculada ao usuário
            })
            .catch(err => res
                .status(500)
                .json({ status: false, data: err })
            )

    };
    //Update
    update(req, res) {
        let model = new Pessoa(req.body);
        model._id = req.params.id;
        let obj = req.body;

        Pessoa
            .updateOne({ _id: model._id }, obj)
            .then((created) => {
                if (!created) {
                    return res
                        .status(404)
                        .json({ status: false, data: {} })
                }
                return res
                    .status(202)
                    .json({ status: true, data: obj })
            })
            .catch(err => res
                .status(500)
                .json({ status: false, data: err })
            )
    };

    //get all service
    all(req, res) {
        Pessoa
            .find()
            .then((models) => {
                if (!models || !models.length) {
                    return res.status(404)
                        .json({
                            status: false,
                            data: []
                        })
                }

                return res.status(200)
                    .json({
                        status: true,
                        data: models
                    })
            })
            .catch(err => status(500)
                .json({
                    status: false,
                    data: []
                })
            );
    };

    //get by id service
    getById(req, res) {
        this.Pessoa
            .findOne({
                _id: req.params.id
            })
            .then((model) => {
                if (!model) {
                    return res.status(404)
                        .json({
                            status: false,
                            data: {}
                        })
                }

                return res.status(200)
                    .json({
                        status: true,
                        data: model
                    })
            })
            .catch(err => status(500)
                .json({
                    status: false,
                    data: {}
                })
            );

    };

    //delete service
    remove(req, res) {
        Pessoa.findByIdAndRemove(req.params.id)
            .then((deleted) => {
                if (!deleted) {
                    return res
                        .status(404)
                        .json(
                        {
                            status: false,
                            data: {}
                        })
                }
                return res
                    .status(200)
                    .json(
                    {
                        status: true,
                        data: deleted
                    })
            })
            .catch(err => {
                return res.status(500)
                    .json({ status: false, data: {} })
            })
    }
}

export default PessoaDAO;