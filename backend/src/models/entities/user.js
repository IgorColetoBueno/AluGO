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
    return bcrypt.hash(password, bcrypt.genSaltSync(8),null, cb);
}

User.methods.validatePassword = function(password, cb) {
    console.log(password);
    console.log(this.password);
    return bcrypt.compare(password, this.password, cb)
}

export default mongoose.model('User', User);