import type { Dispatch } from "react"
import type { Menu } from "../types"
import type { OrderAction } from "../reducers/order-reducer"

type MenuItemProps = {
  item : Menu
  dispatch: Dispatch<OrderAction>
}

export default function MenuItem({ item, dispatch }: MenuItemProps) {
  return (
    <button 
    className="w-full border border-indigo-600 bg-indigo-100 p-4 rounded shadow mb-4 flex justify-between hover:bg-indigo-200"
    onClick={() => dispatch({ type: 'ADD_ITEM', payload: item })}
    >
      <h3 className="font-semibold">{item.name}</h3>
      <p>Precio: <strong className="text-pink-700">${item.price}</strong></p>
    </button>
  )
}
