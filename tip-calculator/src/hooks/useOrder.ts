// import { useState } from "react"
// import type { Menu, OrderItem } from "../types"

// export default function useOrder() {
//   const [order, setOrder] = useState<OrderItem[]>([])
//   const [tip, setTip] = useState(0)

//   const addToOrder = (item: Menu) => {
//     const itemExist = order.find(orderItem => orderItem.id === item.id)

//     if (itemExist) {
//       const updatedOrder = order.map((i) =>
//         i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//       )
//       setOrder(updatedOrder)
//     } else {
//       setOrder((prevOrder) => [...prevOrder, { ...item, quantity: 1 }])
//     }
//   }
  
//   const removeFromOrder = (id: Menu['id']) => {
//     setOrder((prevOrder) => prevOrder.filter((i) => i.id !== id))
//   }

//   const placeOrder = () => {
//     alert('Orden colocada con éxito')
//   }

//   return {
//     order,
//     tip,
//     setTip,
//     addToOrder,
//     removeFromOrder,
//     placeOrder
//   }
// }
