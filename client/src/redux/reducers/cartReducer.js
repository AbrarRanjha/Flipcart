import * as actionTypes from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: []}, action) => {
    switch(action.type) {


        //Add to cart 
        case actionTypes.ADD_TO_CART:
            const item = action.payload;

         //    to check item is already in cart or not
            const existItem = state.cartItems.find(product => product.id === item.id);
            if(existItem){
                return {
                    ...state, cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
                }
            } else {
                let a =  { ...state, cartItems: [...state.cartItems, item]}
                console.log(a)
                return a;
            }


            //remove from cart
        case actionTypes.REMOVE_FROM_CART:
            console.log(state.cartItems)
            console.log(action.payload);
            let s =  {
                ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload)
            }
            console.log(s);
            return s;

        default:
            return state;
    }
}