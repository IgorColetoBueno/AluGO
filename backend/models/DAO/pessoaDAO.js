import pessoa from '../entities/pessoa';
import repository from './repository';

class PessoaDAO extends repository{
    constructor(pessoa) {
        super(pessoa);        
    }
    all(req, res) {
        pessoa
            .find({})            
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

    getById(req, res) {
        pessoa
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

}

export default PessoaDAO;