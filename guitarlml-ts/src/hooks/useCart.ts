import { db } from '../data/db'
import { useState, useEffect, useMemo } from 'react'
import type { CartItem, Guitar, GuitarID } from '../types';

// Definir el tipo de retorno del hook
interface UseCartReturn {
    data: Guitar[];
    cart: CartItem[];
    addToCart: (item: Guitar) => void;
    removeFromCart: (id: GuitarID) => void;
    increaseQuantity: (id: GuitarID) => void;
    decreaseQuantity: (id: GuitarID) => void;
    cleanCart: () => void;
    isEmpty: boolean;
    getTotal: number;
}

export const useCart = (): UseCartReturn => {
    // Función para obtener el carrito inicial desde localStorage con tipo seguro
    const getInitialCart = (): CartItem[] => {
        const cartData = localStorage.getItem('cart');
        return cartData ? JSON.parse(cartData) : [];
    };

    const initialCart = getInitialCart();

    const [data, setData] = useState<Guitar[]>([])
    const [cart, setCart] = useState<CartItem[]>(initialCart)


    useEffect(() => {
        setData(db)
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addToCart = (item: Guitar): void => {
        const itemExists = cart.findIndex((cartItem: CartItem) => cartItem.id === item.id)
        if (itemExists >= 0) {
            const updateCart = [...cart]
            updateCart[itemExists].quantity++
            setCart(updateCart)
        } else {
            const newCartItem: CartItem = { ...item, quantity: 1 };
            setCart([...cart, newCartItem])
        }
    }

    const removeFromCart = (id: GuitarID): void => {
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))    
    }

    const increaseQuantity = (id: GuitarID): void => {
        const updateCart = cart.map((item: CartItem) => {
            if (item.id === id && item.quantity < 10) {
                return { ...item, quantity: item.quantity + 1 }
            }
            return item
        })
        setCart(updateCart)
    }

    const decreaseQuantity = (id: GuitarID): void => {
        const updateCart = cart.map((item: CartItem) => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item
        })
        setCart(updateCart)
    }

    const cleanCart = (): void => {
        setCart([])
    }

    //state derivado 
    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const getTotal = useMemo(() => cart.reduce((total, item) => total + (item.price * item.quantity), 0), [cart])
    
    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        cleanCart, 
        isEmpty, 
        getTotal
    }
};
