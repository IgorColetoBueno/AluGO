
class Repository{    
    constructor(Model){
        this.Model = Model;
    }
    //método para salvar a model passada como parâmetro
    save(req, res){
        let model = new Model(req.body);

        model
            .insertOrUpdate()
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

    //get service
    get(req, res){
        this.Model
            .find(req.params.json())
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
    getById(req, res){
        this.Model
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
    remove(req, res){
        this.Model.findByIdAndRemove(req.params.id)
            .then(() => res.status(204).end())
            .catch(err => res.status(500)
                .json({ status: false, data: {} }))
    }
}
export default Repository;