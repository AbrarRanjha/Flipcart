import * as actionTypes from '../constants/productConstant';
import axios from 'axios';
const url="http://localhost:8000"


//Get All Products
export const getProducts = () => async (dispatch) => {
    try {
      
        const { data } = await axios.get(`${url}/products`);
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
    }
};





//Get Product by id
export const getProductDetails = (id) => async (dispatch) => {
    try {
       
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);
        console.log(data);

        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.response});

    }
};


