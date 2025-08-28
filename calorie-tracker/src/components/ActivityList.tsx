import type { Activity } from "../types"
import { categories } from "../data/categories"
import { useMemo } from "react"
import { PencilSquareIcon } from "@heroicons/react/16/solid"

type ActivityListProps = {
    activities: Activity[]
}

export default function ActivityList({activities}: ActivityListProps) {

    const categoryName = useMemo(() => 
        (category : Activity['category']) => categories.map( cat => cat.id === category ? cat.name : '' )
        , [])

  return (
    <>
        <h2 
        className="text-3xl text-center font-bold"
        >
            Comida y actividades
        </h2>

        {activities.map(activity => (
            <div key={activity.id} className="px-5 py-8 bg-white mt-5 flex justify-between">
                <div className="space-y-2 relative">
                    <p className={`absolute -top-6 -left-7 px-10 py-2 text-white uppercase font-semibold text-sm
                        ${activity.category === 1 ? 'bg-amber-500' : 'bg-emerald-500'}`}>
                        {categoryName(+activity.category)}
                    </p>
                    <p className="text-lg font-bold pt-5 capitalize" >
                        {activity.nameActivity}
                    </p>
                    <p className="text-2xl font-extrabold text-teal-500">
                        {activity.calories} <span>Calorias</span>
                    </p>
                </div>
                <div className="flex gap-5 items-center">
                    <button>
                        <PencilSquareIcon 
                            className="w-8 h-8 text-gray-800"
                        />
                    </button>
                </div>
            </div>
        ))}

    </>
  )
}
