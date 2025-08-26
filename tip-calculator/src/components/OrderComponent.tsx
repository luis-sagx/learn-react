import type { OrderItem } from '../types'

type OrderComponentProps = {
  order: OrderItem[]
}

export default function OrderComponent({ order }: OrderComponentProps) {
  return (
    <div>
        <h2 className="font-bold text-pink-800 text-2xl">Consumo</h2>

        <div className='space-y-3 mt-5'>
            {order.length === 0 ?
              <p className='text-center'>No hay items en el consumo</p>
            :(
                order.map(item => (
                  <section key={item.id} className='border-b py-2'>
                    <p className='font-bold'>{item.name}</p>
                    <p className='text-sm text-gray-700'>Cantidad: {item.quantity}</p>
                    <p className='text-sm text-gray-700'>Precio: ${item.price}</p>
                  </section>
                ))
            )}
        </div>
    </div>
  )
}
