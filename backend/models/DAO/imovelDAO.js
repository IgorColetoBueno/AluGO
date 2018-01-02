import imovel from '../entities/imovel';
import repository from './repository';

class ImovelDAO extends repository{
    constructor(imovel) {
        super(imovel);
        
    }
    all(req, res) {
        imovel
            .find({})
            .populate('pessoa')
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
        imovel
            .findOne({
                _id: req.params.id
            })
            .populate('pessoa')
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

export default ImovelDAO;