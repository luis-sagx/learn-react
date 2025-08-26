import { useState } from "react"
import type { Menu, OrderItem } from "../types"

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([])

  const addToOrder = (item: Menu) => {
    const itemExist = order.find(orderItem => orderItem.id === item.id)

    if (itemExist) {
      const updatedOrder = order.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      )
      setOrder(updatedOrder)
    } else {
      setOrder((prevOrder) => [...prevOrder, { ...item, quantity: 1 }])
    }
  }
  
  const removeFromOrder = (item: Menu) => {
    setOrder((prevOrder) => prevOrder.filter((i) => i.id !== item.id))
  }

  return {
    order,
    addToOrder,
    removeFromOrder
  }
}
