//Importações
import { Strategy, ExtractJwt } from 'passport-jwt';
import User from '../../models/entities/user';
import JwtConfigs from './config';

export default (passport) => {
    passport.use('token', new Strategy(JwtConfigs, (payload, cb) => {
        User
            .findOne({ _id: payload.id })
            .then((user) => {
                if (!user) {
                    return cb(null, false);
                }

                return cb(null, user);
            })
            .catch((err) => {
                return (err, false);
            });
    }));
}