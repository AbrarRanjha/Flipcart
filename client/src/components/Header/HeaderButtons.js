import React,{useState,useContext} from 'react';
import { makeStyles, Box, Typography, Badge, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingCart } from '@material-ui/icons';
import LoginDialog from '../Login/LoginDialog.jsx';
import { LoginContext } from '../context/ContextProvider.jsx';
import Profile from './Profile.jsx';
const useStyle = makeStyles(theme => ({
    container: {
        display: 'flex',
    },
    wrapper: {
        margin: '0 7% 0 auto', 
        display: 'flex', 
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            color: '#FFFFFF',
            fontSize: 12,
            alignItems: 'center',
                 
        },   
    },
    login: {
        color: '#2874f0',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none', 
    },
    container: {
        display: 'flex',
        
    },

}));


const HeaderButtons = () => {
    const classes = useStyle();
const [open,setOpen]=useState(false);
   const {account,setAccount}=useContext(LoginContext);
   const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;
const openLoginDialogue=()=>{
    setOpen(true);
}

    return (
        <Box className={classes.wrapper}>
          {
                account ?<Profile account={account} setAccount={setAccount} /> : 
                
                    <Button className={classes.login} variant="contained" onClick={() => openLoginDialogue() }>Login</Button>
                
            }
               
                  <Link> <Typography style={{ marginTop: 2 }}>More</Typography></Link>
           
               
            
            <Link to="/cart" className={classes.container}> <Badge badgeContent={cartItems?.length} color="secondary" >
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }} >Cart</Typography></Link>
               
          <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
            
        </Box>
    )
}

export default HeaderButtons;