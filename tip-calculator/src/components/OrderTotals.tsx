import { useMemo } from "react"
import type { OrderItem } from "../types"

type OrderTotalProps = {
    order: OrderItem[]
    tip: number
}

export default function OrderTotals({ order, tip }: OrderTotalProps) {

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
        <button>

        </button>
    </>
  )
}
