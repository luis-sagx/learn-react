import type { CartItem, Guitar } from "../types";
import { db } from "../data/db"

export type CartAction = 
    { type: 'add-to-cart'; payload: {item: Guitar} } | 
    { type: 'remove-from-cart'; payload: {id: Guitar['id']} } | 
    { type: 'decrease-quantity'; payload: {id: Guitar['id']} } | 
    { type: 'increase-quantity'; payload: {id: Guitar['id']} } | 
    { type: 'clear-cart' }

export type CartState = {
    data: Guitar[],
    cart: CartItem[]
}

export const initialState : CartState = {
    data: db,
    cart: []
}

const MAX_ITEMS : number = 10
const MIN_ITEMS : number = 1

export const cartReducer = (state: CartState = initialState, action: CartAction) => {
    let updateCart : CartItem[] = []
    if(action.type === "add-to-cart"){
        const itemExists = state.cart.find((cartItem: CartItem) => cartItem.id === action.payload.item.id)
        if (itemExists) {
            updateCart = state.cart.map(item => {
                if(item.id === action.payload.item.id){
                    if(item.quantity < MAX_ITEMS){
                        return {...item, quantity: item.quantity+1}
                    } else {
                        return item
                    }
                } else {
                    return item
                }
            })
        } else {
            const newCartItem: CartItem = { ...action.payload.item, quantity: 1 };
            updateCart = [...state.cart, newCartItem]
        }
        return{ 
            ...state,
            cart: updateCart
        }
    }
    if(action.type === "remove-from-cart"){
        return{ 
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload.id)
        }
    }
    if(action.type === "decrease-quantity"){
        return{ 
            ...state
        }
    }
    if(action.type === "increase-quantity"){
        return{ 
            ...state
        }
    }
    if(action.type === "clear-cart"){
        return{ 
            ...state
        }
    }

    return state;
}