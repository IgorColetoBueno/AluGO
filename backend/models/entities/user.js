import mongoose from 'mongoose';
import bcrypt from 'bcrypt-node';

const User = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    }
});

User.methods.hashPassword = (password, cb) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8),null, cb);
}

export default mongoose.model('User', User);