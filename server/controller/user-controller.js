// import User from '../model/userSchema.js';
const User=require('../model/userSchema.js');
 const userLogIn = async (request, response) => {
    try {
        let user = await User.findOne({ username: request.body.username, password: request.body.password });
        if(user) {
            return response.status(200).json(`${request.body.username} login successfull`);
            windows.alert('logged in');
        } else {
            return response.status(401).json('Invalid Login');
            windows.alert('invalid credentials');
        }

    } catch (error) {
        response.json('Error: ', error.message);        
    }
}

 const userSignUp = async (request, response) => {
    try {
        const exist = await User.findOne({ username: request.body.username });
        if(exist) {
            return response.status(401).json('User already exist');
            console.log('existed');
            
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json(`user has been successfully registered`);
        console.log('registered');
    } catch (error) {
        response.json(error);
        console.log(error);
    }
}

module.exports={userSignUp,userLogIn};



