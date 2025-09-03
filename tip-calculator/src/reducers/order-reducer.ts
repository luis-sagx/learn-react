import type { Menu, OrderItem } from "../types";

// Funciones para localStorage
const STORAGE_KEY = 'tip-calculator-state';

export const saveToLocalStorage = (state: OrderState) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const loadFromLocalStorage = (): OrderState | null => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error('Error loading from localStorage:', error);
  }
  return null;
};


export type OrderAction =
  | { type: 'ADD_ITEM'; payload: Menu }
  | { type: 'REMOVE_ITEM'; payload: Menu['id'] }
  | { type: 'PLACE_ORDER' }
  | { type: 'ADD_TIP'; payload: { value: number } };


export type OrderState = {
  order: OrderItem[];
  tip: number;
}

export const getInitialState = (): OrderState => {
  const savedState = loadFromLocalStorage();
  return savedState || {
    order: [],
    tip: 0,
  };
};

export const initialState: OrderState = getInitialState();

export const orderReducer = (state: OrderState = initialState, action: OrderAction): OrderState => {
  switch (action.type) {
    case 'ADD_ITEM': {
        const itemExist = state.order.find(orderItem => orderItem.id === action.payload.id)
        let order: OrderItem[] = []
        if (itemExist) {
            order = state.order.map((i) =>
                i.id === action.payload.id ? 
                { ...i, quantity: i.quantity + 1 } : i
            )
        } else {
            const newItem: OrderItem = { ...action.payload, quantity: 1 };
            order = [...state.order, newItem];
        }
        return {
            ...state,
            order
        };
    }
    case 'REMOVE_ITEM': {
        return {
            ...state,
            order: state.order.filter(item => item.id !== action.payload),
        };
    }
    case 'PLACE_ORDER': {
        const newState = {
            order: [],
            tip: 0,
        };
        // Limpiar localStorage cuando se hace la orden
        saveToLocalStorage(newState);
        return newState;
    }
    case 'ADD_TIP': {
        return {
            ...state,
            tip: action.payload.value,
        };
    }
    default:
        return state;
    }
};
