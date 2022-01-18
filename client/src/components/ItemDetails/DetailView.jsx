import { useState, useEffect } from 'react';
import { Box, Typography, makeStyles,Table, TableBody, TableRow, TableCell} from '@material-ui/core';
import { LocalOffer as Badge } from '@material-ui/icons';
// import ProductDetail from './ProductDetail';
import ActionItem from './ActionItem';
// import { useParams } from 'react-router-dom';
import clsx from 'clsx';
// import { getProductById } from '../../service/api';
import { useDispatch, useSelector } from 'react-redux';

import { getProductDetails } from '../../redux/actions/productActions';

const useStyles = makeStyles(theme => ({
    component: {
        marginTop: 55,
        background: '#F2F2F2'
    },
    container: {
        background: '#FFFFFF',
        margin: '0 80px',
        display: 'flex',
        // [theme.breakpoints.down('md')]: {
        //     margin: 0
        // }
    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    // price: {
    //     fontSize: 28
    // },
    smallText: {
        fontSize: 14,
        '& > *': {
            marginTop: 10
        }
    },
    greyTextColor: {
        color: '#878787'
    },
    badge: {
        marginRight: 10,
        color: '#00CC00',
        fontSize: 15
    },
}));

const DetailView = ({match}) => {

    const classes = useStyles();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime()+(5*24*60*60*1000));


    const {product} = useSelector(state => state.getProductDetails);
    

    const dispatch = useDispatch();
    
    useEffect(() => {
     
            dispatch(getProductDetails(match.params.id));
    }, [dispatch]);

    return (
     
         <Box className={classes.component}>
           {   product && Object.keys(product).length &&
         <Box className={classes.container}>
          <Box style={{minWidth:'40%'}}>
          <ActionItem product={product} />
          </Box>
          <Box>
          <Typography>{product.title.longTitle}</Typography>
          <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{marginTop: 5}}>
             8 Ratings & 1 Reviews
                 <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
         </Typography>

         <Typography>
                   <span className={classes.price}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp; 
                  <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                  <span style={{color: '#388E3C'}}>{product.price.discount} off</span>
        </Typography>




                     {/* Available Offers */}


        <Typography>Available offers</Typography>
            <Box >
                <Typography><Badge className={classes.badge} />Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                <Typography><Badge className={classes.badge}/>Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
                <Typography><Badge className={classes.badge}/>Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
                <Typography><Badge className={classes.badge}/>Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
           </Box>

              


           <Table>
                <TableBody>
                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                    </TableRow>
                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                        <TableCell>No Warranty</TableCell>
                    </TableRow>
                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Seller</TableCell>
                        <TableCell className={classes.smallText}>
                            <span style={{ color: '#2874f0' }}>SuperComNet</span>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹329</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 390 }} />
                        </TableCell>
                    </TableRow>
                    <TableRow className={classes.smallText}>
                        <TableCell className={classes.greyTextColor}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
         




          </Box>

   

        



         </Box>
}
        </Box>
    )
}

export default DetailView;