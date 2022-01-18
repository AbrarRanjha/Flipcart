const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
      
    },
    lastname: {
        type: String,
        required: true,
       
       
    },
    username: {
        type: String,
        required: true,
        unique: true,
       
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String
    }
});

const user = mongoose.model('flipmember', userSchema);

module.exports= user;