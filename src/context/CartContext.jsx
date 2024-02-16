/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */
import  { createContext, useContext, useReducer } from "react";
import { sumProducts } from '../Helpers/Helper'
 
const initialState = {
    selectedItems : [],
    itemsCounter : 0 , 
    total : 0 , 
    checkout : false
};

const reducer = (state, action) => {
      switch (action.type) {
        case "ADD_ITEM":
        if (!state.selectedItems.find( item => item.id === action.payload.id )) {
            state.selectedItems.push({...action.payload , quantity : 1});
        }
        return {
            ...state, 
            ...sumProducts(state.selectedItems) ,
            checkout:false 
        };
        case "REMOVE_ITEM" : 
        const  newSelectedItesm = state.selectedItems.filter( (item) => item.id !== action.payload.id);
        return {
            ...state , 
            selectedItems:[...newSelectedItesm] , 
            ...sumProducts(newSelectedItesm)
        }
        case "INCREASE" : 
        const increaseindex = state.selectedItems.findIndex( item => item.id === action.payload.id);
        state.selectedItems[increaseindex].quantity++;
        return {
            ...state , 
            ...sumProducts(state.selectedItems)
        }

        case "DECREASE" : 
        const decreaseindex = state.selectedItems.findIndex( item => item.id === action.payload.id);
        state.selectedItems[decreaseindex].quantity--;
        return {
            ...state , 
            ...sumProducts(state.selectedItems)
        }

        case "CHECKOUT" :
            return {
                selectedItems : [],
                itemsCounter : 0 , 
                totalPrice : 0 , 
                checkout : true 
            }

        // eslint-disable-next-line no-fallthrough
        default:
            throw new Error("Invalid Action");
      }
};

const CartContext = createContext();

// eslint-disable-next-line react/prop-types
function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
       {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const { state , dispatch } = useContext(CartContext);
    return [ state , dispatch ]
};

export default CartProvider;
export { useCart };
