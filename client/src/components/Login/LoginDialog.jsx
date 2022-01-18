import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, TextField, Box, Button, makeStyles, Typography } from '@material-ui/core';
import {authenticateSignup,authenticateLogin} from "../service/api.js";


const useStyle = makeStyles({
    component: {
        height: '80vh',
        width: '90vh',
        maxWidth: 'unset !important'
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        background: '#2874f0',
        backgroundPosition: 'center 85%',
        backgroundRepeat: 'no-repeat',
        height: '80vh',
        width: '40%',
        padding: '45px 35px',
        '& > *': {
            color: '#FFFFFF',
            fontWeight: 600
        }
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *': {
            marginTop: 15
        }
    },
    loginbtn: {
        textTransform: 'none',
        background: '#FB641B',
        color: '#fff',
        height: 40,
        borderRadius: 2
    },
    requestbtn: {
        textTransform: 'none',
        background: '#fff',
        color: '#2874f0',
        height: 40,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    createText: {
        margin: 'auto 0 5px 0',
        textAlign: 'center',
        color: '#2874f0',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer'
    },
    error: {
        fontSize: 12,
        color: '#ff6161',
        lineHeight: 0,
        marginTop: 20,
        fontWeight: 600
    }
})

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}

const LoginDialog = ({open,setOpen,setAccount}) => {
    const classes = useStyle();
    const [ login, setLogin ] = useState(loginInitialValues);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const [ error, showError] = useState(false);
    const [ account, toggleAccount ] = useState(accountInitialValues.login);

    
 const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const LoginUser = async() => {
        let response = await authenticateLogin(login);
        if(!response){
            showError(true);
            return
        }
        else {
            showError(false);
            handleClose();
            setAccount(login.username);
        }
    }
    

    const signUpUser = async() => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.username);
    }
    
    const toggledAccount = () => {
        toggleAccount(accountInitialValues.signup);
    }


   
    return (
        <Dialog open={open} onClose={handleClose} >
            <DialogContent className={classes.component} >
              <Box style={{display: 'flex'}}>
                  <Box className={classes.image}>
                  <Typography variant="h5">{account.heading}</Typography>
                  <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
             </Box>

                 {
                     account.view==="login"?
                

             <Box className={classes.login}>
                  <TextField onChange={(e) => onValueChange(e)} name='username' label='Enter userName' />
                  

                  <TextField onChange={(e) => onValueChange(e)} name='password' label='Enter Password'/>
                  { error && <Typography className={classes.error}>***Invalid Credentials</Typography> }
                  <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                  <Button onClick={()=>LoginUser()} variant="contained" className={classes.loginbtn}>Login</Button>
                <Typography className={classes.text} style={{textAlign:'center'}}>OR</Typography>
                <Button variant="contained" className={classes.requestbtn}>Request OTP</Button>
               <Typography onClick={toggledAccount} className={classes.createText}>New to Flipkart? Create an account</Typography>

             </Box>:

                  <Box className={classes.login}>
                  <TextField name='firstname'onChange={(e) => onInputChange(e)} label='Enter first name' />
                  <TextField name='lastname' onChange={(e) => onInputChange(e)} label='Enter last name'/>
                  <TextField name='username' onChange={(e) => onInputChange(e)} label='Enter username' />
                  <TextField name='email' onChange={(e) => onInputChange(e)} label='Enter email'/>
                  <TextField name='password' onChange={(e) => onInputChange(e)} label='Enter Password'/>
                  <TextField name='phone' onChange={(e) => onInputChange(e)} label='Enter Mobile number' />
                  <Button onClick={()=>signUpUser()} variant="contained" className={classes.loginbtn}>SIGN UP</Button>
                 

             </Box>





                 }

              </Box>
            </DialogContent>
        </Dialog>
    )
}

export default LoginDialog;