import type { OrderAction } from '../reducers/order-reducer'
import type { OrderItem } from '../types'
import type { Dispatch } from 'react'

type OrderComponentProps = {
  order: OrderItem[]
  dispatch: Dispatch<OrderAction>
}

export default function OrderComponent({ order, dispatch }: OrderComponentProps) {
  return (
    <div>
        <h2 className="font-bold text-pink-800 text-2xl">Consumo</h2>

        <div className='space-y-3 mt-5'>
            {
              order.map(item => (
                <section key={item.id} className='border-b py-3 flex justify-between'>
                  <div>
                    <p 
                      className='font-bold'>{item.name} - ${item.price}
                    </p>
                    <p 
                      className=' text-gray-700'>Cantidad: {item.quantity} - 
                      <strong 
                        className='font-medium text-pink-900'>${item.price * item.quantity}
                      </strong>
                    </p>
                  </div>
                  <button 
                    className='h-10 w-10 rounded-full bg-pink-800 text-white px-3 py-1 mt-2 hover:bg-pink-900 font-bold hover:scale-105 transition-transform'
                    onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </section>
              ))
            }
        </div>
    </div>
  )
}
