import { createContext, useContext, useReducer } from "react";
import reducer from '../reducer/cartReducer'
const  CartContext = createContext();

const initalState={
    cart:[],
    total_item: "",
    total_amount: "",
}

const CartProvider=({children})=>{
    
    const [state, dispatch] = useReducer(reducer, initalState );

    const addToCart = (
        id,
        imgUrl,
        category,
        title,
        rating,
        language,
        price,
        teacher,
        description
      )=> {
        dispatch({type: "ADD_TO_CART", payload: {
            id,
            imgUrl,
            category,
            title,
            rating,
            language,
            price,
            teacher,
            description}})
      };
    
    return <CartContext.Provider value={{...state, addToCart}}>
        {children}
    </CartContext.Provider>
}

const useCartContext=()=>{
    return useContext(CartContext);
}

export {CartProvider}; 