import { db } from '../data/db'
import { useState, useEffect, useMemo } from 'react'

export const useCart = () => {
    const initialCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

    const [data, setData] = useState([])
    const [cart, setCart] = useState(initialCart)


    useEffect(() => {
        setData(db)
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addToCart = (item) => {
        const itemExists = cart.findIndex((newGuitar) => newGuitar.id === item.id)
        if (itemExists >= 0){
            const updateCart = [...cart]
            updateCart[itemExists].quantity++
            setCart(updateCart)
        } else {
            item.quantity = 1;
            setCart([...cart, item])
        }
    }

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))    
    }
        
    const increaseQuantity = (id) => {
        const updateCart = cart.map(item => {
            if (item.id === id && item.quantity < 10) {
                return { ...item, quantity: item.quantity + 1 }
            }
            return item
        })
        setCart(updateCart)
    }

    const decreaseQuantity = (id) => {
        const updateCart = cart.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item
        })
        setCart(updateCart)
    }

    const cleanCart = () => {
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
