//Importações
import User from '../../models/entities/user';
import jwt from 'jwt-simple';
import JwtConfigs from './config';
//Função para geração de token ao
export default (req, res) => {
    User
        .findOne({
            username: req.body.username
        })
        .then((user) => {
            if (!user) {
                return res.status(404).json({
                    status: false,
                    user: {}
                })
            }

            user.validatePassword(req.body.password, (err, result) => {
                if (!result || err) {
                    return res.status(404).json({
                        status: false,
                        token: '',
                        error: err,
                        result : result
                    })
                }

                let token = jwt.encode({ id: user._id }, JwtConfigs.secretOrKey)

                return res.status(200).json({
                    status: true,
                    token
                })
            })
        })
        .catch((err) => {
            console.log(err);
            return res.status(500).json({
                status: false,
                token: {},
                error: err
            })
        })
}