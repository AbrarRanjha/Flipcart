import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Navbar from './Navbar';
import Banner from './Banner';
import { Box,makeStyles} from '@material-ui/core';
import MidSection from './MidSection';
import { getProducts as listProducts } from '../../redux/actions/productActions';
import Slide from './Slide';
const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2'
    },
    rightComponent: {
        marginTop: 12,
        background: '#FFFFFF',
        width: '17%',
        marginLeft: 10,
        padding: 5,
    }
})

const Home = () => {
    const classes=useStyle();
    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;

    const addURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <Navbar/>
            <Box className={classes.component}>
            <Banner/>

            <Box style={{display:'flex'}}>
            <Box style={{width:'83%'}}>
            <Slide 
            timer={true}
            title="Deal of the day"
            products={products}
            />
            </Box>
            <Box className="rightComponent">
                <img src={addURL} style={{width:230}} />
            </Box>
            </Box>
           <MidSection/>
            <Slide timer={false} title='Suggested Items' products={products}/>
            <Slide timer={false} title='Top Selections' products={products}/>
            <Slide timer={false} title='Discount Items' products={products}/>
     
            </Box>
            
        </>
    )
}

export default Home
