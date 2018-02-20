import Imovel from '../entities/imovel';

class ImovelDAO {
    //método para salvar a model passada como parâmetro
    save(req, res) {
        let model = new Imovel(req.body);
        model
            .save()
            .then((created) => {
                if (!created) {
                    return res
                        .status(404)
                        .json({ status: false, data: {} })
                }
                return res
                    .status(201)
                    .json({ status: true, data: created })
            })
            .catch(err => res
                .status(500)
                .json({ status: false, data: err })
            )
    };
    //Update
    update(req, res) {
        let model = new Imovel(req.body);
        model._id = req.params.id;
        let obj = req.body;

        Imovel
            .updateOne({ _id: model._id }, obj)
            .populate('pessoa')
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
        Imovel
            .find()
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

    //get by id service
    getById(req, res) {
        this.Imovel
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

    //delete service
    remove(req, res) {
        Imovel.findByIdAndRemove(req.params.id)
            .populate('pessoa')
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

export default ImovelDAO;