import { useState, useEffect } from 'react'
import Header  from './components/Header'
import './App.css'
import Guitar from './components/Guitar'
import { db } from './data/db'


function App() {

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

    return (
    <>
      <Header 
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        cleanCart={cleanCart}
      />

      <main className="container-xl mt-5">
          <h2 className="text-center">Nuestra Colección</h2>

          <div className="row mt-5">
                {data.map(guitar => (
                    <Guitar 
                        key={guitar.id}
                        guitar={guitar}
                        setCart={setCart}
                        addToCart={addToCart}
                    />
                ))}
          </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
          <div className="container-xl">
              <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLML - Todos los derechos Reservados</p>
          </div>
      </footer>     
    </>
    )
}

export default App
