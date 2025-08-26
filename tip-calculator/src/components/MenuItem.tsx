import type { Menu } from "../types"

type MenuItemProps = {
  item : Menu
  addToOrder : (item: Menu) => void
}

export default function MenuItem({ item, addToOrder }: MenuItemProps) {
  return (
    <button 
    className="w-full border border-indigo-600 bg-indigo-100 p-4 rounded shadow mb-4 flex justify-between hover:bg-indigo-200"
    onClick={() => addToOrder(item)}
    >
      <h3 className="font-semibold">{item.name}</h3>
      <p>Precio: <strong className="text-pink-700">${item.price}</strong></p>
    </button>
  )
}
