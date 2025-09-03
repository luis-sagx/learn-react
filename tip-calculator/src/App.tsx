import { menuItems } from './data/bd'
import MenuItem from './components/MenuItem'
import './App.css'
import OrderComponent from './components/OrderComponent'
import OrderTotals from './components/OrderTotals'
import TipPercentageForm from './components/TipPercentageForm'
import { initialState, orderReducer, saveToLocalStorage } from './reducers/order-reducer'
import { useReducer, useEffect } from 'react'

function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState)

  // Guardar en localStorage cada vez que cambie el estado
  useEffect(() => {
    saveToLocalStorage(state);
  }, [state]);

  return (
    <>
    <header className='py-5 bg-gradient-to-r from-indigo-700 to-pink-800'>
      <h1 className='text-center text-3xl font-extrabold text-white'>Calculadora de Propinas y consumo</h1>
    </header>
    <main className='max-w-6xl mx-auto mt-10 grid md:grid-cols-2 gap-6'>
      <div className='p-5'>
        <h2 className='p-2 font-bold text-2xl text-indigo-900'>Menu</h2>
        <div className='my-5 spapace-y-3'>
          {menuItems.map(item => (
            <MenuItem
              key={item.id} 
              item={item}
              dispatch={dispatch}
            />
          ))}
        </div>
      </div>
      
      <div className='border border-dashed border-pink-700 p-5 rounded-lg space-y-10'>
        {state.order.length > 0 ? (
          <>
          <OrderComponent
            order={state.order}
            dispatch={dispatch}
          />

          <TipPercentageForm 
            dispatch={dispatch}
            tip={state.tip}
          />

          <OrderTotals 
            order={state.order}
            tip={state.tip}
            dispatch={dispatch}
          />
          </>
        ) : (
          <p className="text-center">No hay items en la orden</p>
        )}
      </div>
    </main>
    </>
  )
}

export default App
