const express=require('express');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let User = require('../model/user.modal');
const{ userSignUp,userLogIn}=require('../controller/user-controller.js');
const{ getProducts,getProductById }=require('../controller/product-controller.js');

const router = express.Router();

// Image Upload Work
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });

router.post('/add',upload.single('photo'), (req, res) => {
    const name = req.body.name;
    const birthdate = req.body.birthdate;
    const photo = req.file.filename;

    const newUserData = {
        name,
        birthdate,
        photo
    }

    const newUser = new User(newUserData);

    newUser.save()
           .then(() => res.json('User Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});



router.post('/signup', userSignUp);
router.post('/login', userLogIn);


router.get('/products', getProducts);
router.get('/product/:id', getProductById);


module.exports=router;