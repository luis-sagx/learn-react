import { categories } from "../data/categories";
import { v4 as uuidv4 } from 'uuid'
import { useState } from "react";
import type { ChangeEvent, Dispatch, FormEvent } from "react";
import type { Activity } from "../types";
import type { ActivityActions } from "../reducers/activity-reducer";

type FormProps = {
    dispatch: Dispatch<ActivityActions>
}

export default function Form({dispatch}: FormProps) {

    const initialState : Activity = {
        id: uuidv4(),
        category: 1,
        nameActivity: '',
        calories: 0   
    }
    
    const [activity, setActivity] = useState<Activity>(initialState)

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const isNumberField = ['category', 'calories'].includes(e.target.id);
        setActivity(
            prev => ({
                ...prev,
                [e.target.id]: isNumberField ? +e.target.value : e.target.value
            })
        );
    }

    const isValidActivity = () => {
        const { nameActivity, calories } = activity;
        return nameActivity.trim() !== '' && calories > 0;
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch({type : "save-activity", payload: {newActivity: activity}})

        setActivity({
            ...initialState,
            id: uuidv4()
        })
    }

  return (
    <>
        <form 
        className="p-10 space-y-5 bg-white shadow-lg rounded-xl"
        onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categorias:</label>
                <select 
                name="category" 
                id="category"
                className="w-full p-2 transition-colors bg-white border-2 rounded-lg border-slate-400 focus:border-slate-600 focus:outline-none"
                value={activity.category}
                onChange={handleChange}
                >
                    <option value="" disabled>-- Seleccionar Categoría --</option>
                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="nameActivity" className="font-bold">Actividad:</label>
                <input 
                    id="nameActivity"
                    name="nameActivity"
                    type="text" 
                    className="p-2 transition-colors border-2 rounded-lg border-slate-400 focus:border-slate-600 focus:outline-none"
                    placeholder="Ejm: Correr, Ejercicio, ..."
                    value={activity.nameActivity}
                    onChange={handleChange}
                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorías:</label>
                <input 
                    id="calories"
                    name="calories"
                    type="number" 
                    className="p-2 transition-colors border-2 rounded-lg border-slate-400 focus:border-slate-600 focus:outline-none"
                    placeholder="Ejm: 200, 300, ..."
                    value={activity.calories}
                    onChange={handleChange}
                />
            </div>

            <input 
            className="w-full p-3 font-bold text-white transition-all duration-200 transform rounded-lg cursor-pointer bg-emerald-600 hover:bg-emerald-700 hover:shadow-lg hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70" 
            disabled={!isValidActivity()}
            type="submit" 
            value={activity.category === 1 ? 'Agregar comida' : 'Agregar ejercicio'}
            />

        </form>
    </>
  )
}
