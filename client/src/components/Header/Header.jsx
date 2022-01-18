import { AppBar, Toolbar, makeStyles, Box, Typography, withStyles, IconButton, Drawer, List, ListItem} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Menu } from '@material-ui/icons';
import { useState } from 'react';
import Search from '../Search';
import HeaderButtons from './HeaderButtons';

const useStyle = makeStyles(theme => ({
    header: {
        background: '#2874f0',
        height: 55
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        color: '#FFFFFF',
        textDecoration: 'none'
    },
    logo: {
        width: 75
    },
    container: {
        display: 'flex',
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic'
    },
    subURL: {
        width: 10,
        height: 10,
        marginLeft: 4
    },
    list: {
        width: 250
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    customButtons: {
        margin: '0 5% 0 auto', 
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        } 
    }
})
);
const ToolBar = withStyles({
    root: {
      minHeight: 55
    },
})(Toolbar);


const Header = () => {
    const classes = useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
   
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

 

    return (
        <AppBar className={classes.header}>
            <ToolBar>
            <Link to="/" className={classes.component}>
                    <img src={logoURL} className={classes.logo} />
                    <Box component="span" className={classes.container}>
                    <Typography className = {classes.subHeading}>Explore <Box component="span" style={{color:'#FFE500'}}>Plus</Box></Typography>
                    <img src={subURL} className={classes.subURL} />
                   </Box>
                   </Link>
              <Search />
              <span className={classes.customButtons}><HeaderButtons /></span>
            </ToolBar>
        </AppBar>
    )
}

export default Header;