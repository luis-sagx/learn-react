import { useMemo } from "react"
import type { Activity } from "../types"
import CalorieDisplay from "./CalorieDisplay"

type CalorieTrackerProps = {
  activities: Activity[]
}

export default function CalorieTracker({ activities }: CalorieTrackerProps) {

    const caloriesConsumed = useMemo(() => {
        return activities.reduce((total, activity) => activity.category === 1 ? 
            total + activity.calories : 
            total, 0)
    }, [activities])

    const caloriesBurned = useMemo(() => {
        return activities.reduce((total, activity) => activity.category === 2 ? 
            total + activity.calories : 
            total, 0)
    }, [activities])

    const totalCalories = useMemo(() => caloriesConsumed - caloriesBurned, [caloriesConsumed, caloriesBurned])

  return (
    <>
      <h2 className="text-3xl font-extrabold text-white text-center">Resumen de calorias</h2>
      
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CalorieDisplay 
            calories={caloriesConsumed} 
            type="Consumidas" 
        />

        <CalorieDisplay 
            calories={caloriesBurned} 
            type="Quemadas" 
        />

        <CalorieDisplay 
            calories={totalCalories} 
            type="Total" 
        />

      </div>
    </>
  )
}
