import mongoose from 'mongoose';

const User = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true,        
    }
});

export default mongoose.model('User',User);