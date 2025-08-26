import type { Menu, OrderItem } from '../types'

type OrderComponentProps = {
  order: OrderItem[]
  removeFromOrder: (id: Menu['id']) => void
}

export default function OrderComponent({ order, removeFromOrder }: OrderComponentProps) {
  return (
    <div>
        <h2 className="font-bold text-pink-800 text-2xl">Consumo</h2>

        <div className='space-y-3 mt-5'>
            {order.length === 0 ?
              <p className='text-center'>No hay items en el consumo</p>
            :(
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
                      onClick={() => removeFromOrder(item.id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </section>
                ))
            )}
        </div>
    </div>
  )
}
