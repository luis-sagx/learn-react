import { useMemo } from "react"
import type { OrderItem } from "../types"
import type { OrderAction } from '../reducers/order-reducer'
import type { Dispatch } from 'react'

type OrderTotalProps = {
    order: OrderItem[]
    tip: number
    dispatch: Dispatch<OrderAction>
}

export default function OrderTotals({ order, tip, dispatch }: OrderTotalProps) {

    const subtotalAmount = useMemo(() => order.reduce((acc, item) => acc + item.price * item.quantity, 0), [order])
    const tipAmount = useMemo(() => subtotalAmount * (tip / 100), [subtotalAmount, tip])
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [subtotalAmount, tipAmount])

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-bold text-2xl">Totales y propina</h2>
            <p>Subtotal a pagar: <strong>${subtotalAmount}</strong></p>
            <p>Propina ({tip}%): <strong>${tipAmount}</strong></p>
            <p>Total: <strong>${totalAmount}</strong></p>
        </div>
        <button 
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed font-semibold mt-5"
            disabled={order.length === 0}
            onClick={() => dispatch({ type: "PLACE_ORDER" })}
        >
            Guardar Orden
        </button>
    </>
  )
}
