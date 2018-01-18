import User from '../entities/user';

class UserDAO {
    constructor() {

    }
    save(req, res) {
        let model = new User(req.body);
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
        let model = new User(req.body);
        model._id = req.params.id;
        let obj = req.body;

        User
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
        User
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
        this.User
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
        User.findByIdAndRemove(req.params.id)
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

export default UserDAO;