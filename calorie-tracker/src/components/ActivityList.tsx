import type { Activity } from "../types"
import { categories } from "../data/categories"
import { useMemo } from "react"
import type { Dispatch } from "react"
import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/16/solid"
import type { ActivityActions } from "../reducers/activity-reducer"

type ActivityListProps = {
    activities: Activity[],
    dispatch: Dispatch<ActivityActions>
}

export default function ActivityList({activities, dispatch }: ActivityListProps) {

    const categoryName = useMemo(() => 
        (category : Activity['category']) => categories.map( cat => cat.id === category ? cat.name : '' )
        , [])

    const isEmptyActivities = useMemo(() => activities.length === 0, [activities])

  return (
    <>
        <h2 
        className="text-3xl text-center font-bold text-slate-900"
        >
            Comida y actividades
        </h2>

        {isEmptyActivities && (
            <p className="text-slate-600 text-center">No hay actividades registradas</p>
        )}

        {activities.map(activity => (
                <div key={activity.id} className="px-5 py-8 bg-white mt-5 flex justify-between border border-slate-200 rounded-lg shadow">
                    <div className="space-y-2 relative">
                        <p className={`absolute -top-6 -left-7 px-10 py-2 text-white uppercase font-semibold text-sm rounded-tr-lg
                            ${activity.category === 1 ? 'bg-amber-600' : 'bg-green-600'}`}>
                        {categoryName(+activity.category)}
                    </p>
                    <p className="text-lg font-bold pt-5 capitalize text-slate-900" >
                        {activity.nameActivity}
                    </p>
                    <p className="text-2xl font-extrabold text-blue-600">
                        {activity.calories} <span>Calorias</span>
                    </p>
                </div>
                <div className="flex gap-5 items-center">
                    <button
                        onClick={() => dispatch({ type: 'set-activeId', payload: { id: activity.id } })}
                    >
                        <PencilSquareIcon 
                            className="w-8 h-8 text-slate-700 cursor-pointer hover:scale-105 transition-transform 3s hover:text-blue-600"
                        />
                    </button>
                    <button onClick={() => dispatch({ type: 'delete-activity', payload: { id: activity.id } })}>
                        <XCircleIcon
                            className="w-8 h-8 text-red-600 cursor-pointer hover:scale-105 transition-transform 3s hover:text-red-700"
                        />
                    </button>
                </div>
            </div>
        ))}

    </>
  )
}
