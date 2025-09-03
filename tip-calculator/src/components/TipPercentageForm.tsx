
import { useState, useEffect } from 'react'
import type { Dispatch } from 'react'
import type { OrderAction } from '../reducers/order-reducer'

type TipPercentageFormProps = {
    dispatch: Dispatch<OrderAction>
    tip: number
}

const tipOptions = [
    { id: 'tip-10', label: '10%', value: 10 },
    { id: 'tip-15', label: '15%', value: 15 },
    { id: 'tip-20', label: '20%', value: 20 },
    { id: 'tip-50', label: '50%', value: 50 },
    { id: 'tip-custom', label: 'Personalizado', value: 'custom' }
]

export default function TipPercentageForm({ dispatch, tip }: TipPercentageFormProps ) {
  const [selectedTip, setSelectedTip] = useState('')
  const [customTipValue, setCustomTipValue] = useState('')

  // Sincronizar el selectedTip con el valor actual del tip
  useEffect(() => {
    if (tip === 0) {
      setSelectedTip('')
      setCustomTipValue('')
    } else {
      // Verificar si el tip coincide con alguna opción predefinida
      const predefinedOption = tipOptions.find(option => 
        typeof option.value === 'number' && option.value === tip
      )
      
      if (predefinedOption) {
        setSelectedTip(predefinedOption.id)
        setCustomTipValue('')
      } else {
        // Es un valor personalizado
        setSelectedTip('tip-custom')
        setCustomTipValue(tip.toString())
      }
    }
  }, [tip])

  const handleTipChange = (tipId: string, tipValue: number | string) => {
    setSelectedTip(tipId)
    if (typeof tipValue === 'number') {
      dispatch({ type: 'ADD_TIP', payload: { value: tipValue } })
    }
  }

  const handleCustomTipChange = (customValue: string) => {
    const numericValue = parseInt(customValue)
    if (!isNaN(numericValue) && numericValue >= 1 && numericValue <= 100) {
      dispatch({ type: 'ADD_TIP', payload: { value: numericValue } })
    } else if (customValue === '') {
      // Si el campo está vacío, resetear a 0
      dispatch({ type: 'ADD_TIP', payload: { value: 0 } })
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevenir caracteres no numéricos excepto backspace, delete, tab, etc.
    if (
      !['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight'].includes(e.key) &&
      !e.ctrlKey && !e.metaKey &&
      (e.key < '0' || e.key > '9')
    ) {
      e.preventDefault()
    }
  }

  return (
    <form action="submit">
        <label id="tip-percentage-label" className="font-semibold">Porcentaje de propina:</label>
        <div>
            {tipOptions.map(option => (
                <div className="flex items-center space-x-2" key={option.id}>
                    <input 
                        type="radio" 
                        id={option.id} 
                        name="tipPercentage" 
                        value={option.value} 
                        checked={selectedTip === option.id}
                        onChange={() => handleTipChange(option.id, option.value)}
                    />
                    <label htmlFor={option.id}>{option.label}</label>
                    {option.id === 'tip-custom' && selectedTip === 'tip-custom' && (
                        <input 
                            type="number" 
                            id="custom-tip" 
                            name="customTip" 
                            min="1" 
                            max="100" 
                            placeholder="Porcentaje"
                            value={customTipValue}
                            className="ml-2 border-b border-gray-300 px-2 py-1 w-28"
                            onChange={(e) => {
                              setCustomTipValue(e.target.value)
                              handleCustomTipChange(e.target.value)
                            }}
                            onKeyDown={handleKeyDown}
                        />
                    )}
                </div>
            ))}
        </div>
    </form>
  )
}
