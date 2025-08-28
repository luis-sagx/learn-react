import { useReducer } from 'react'
import Form from './components/Form'
import { activityReducer, initialState } from './reducers/activity-reducer'
import ActivityList from './components/ActivityList'

function App() {

  const[state, dispatch] = useReducer(activityReducer, initialState)

  return (
    <>
    <div className='bg-gray-100'>
      <header className='bg-emerald-600'>
        <h1 className='py-5 text-4xl font-extrabold text-center text-white'>Contador de calorias</h1>
      </header>
      <section className='bg-gradient-to-br from-emerald-100 to-teal-200'>
        <div className='max-w-4xl px-10 py-20 mx-auto'>
          <Form 
            dispatch={dispatch}
          />
        </div>
      </section>
      <section className='p-10 max-w-4xl mx-auto'>
        <ActivityList 
          activities={state.activities}
        />
      </section>
    </div>
    </>
  )
}

export default App
