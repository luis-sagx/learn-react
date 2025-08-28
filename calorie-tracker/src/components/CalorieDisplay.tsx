type CalorieDisplayProps = {
    calories: number
    type: string
}

export default function CalorieDisplay({ calories, type }: CalorieDisplayProps) {
  return (
    <p className=" text-gray-200 font-semibold rounded-full grid grid-cols-1 gap-3 text-center">
        <span className="font-black text-5xl text-amber-500">{calories}</span>
        {type}
    </p>
  )
}
