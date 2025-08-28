import { useEffect, useReducer } from 'react'
import Form from './components/Form'
import { activityReducer, initialState } from './reducers/activity-reducer'
import ActivityList from './components/ActivityList'
import CalorieTracker from './components/CalorieTracker'

function App() {

  const[state, dispatch] = useReducer(activityReducer, initialState)

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  const canRestartApp = () => state.activities.length > 0

  return (
    <>
    <div className='bg-slate-50'>
      <header className='bg-slate-900'>
        <div className='max-w-4xl mx-auto p-5 flex justify-between items-center'>
          <h1 className='py-5 text-4xl font-extrabold text-center text-white'>Contador de calorias</h1>
          <button 
          disabled={!canRestartApp()}
          onClick={() => dispatch({ type: 'restart-app' })} 
          className='bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 text-sm font-semibold'
          >
            Reiniciar App
          </button>
        </div>
      </header>
      <section className='bg-gradient-to-br from-blue-50 to-indigo-100'>
        <div className='max-w-4xl px-10 py-20 mx-auto'>
          <Form
            state={state}
            dispatch={dispatch}
          />
        </div>
      </section>
      <section className='py-16 bg-gray-800'>
        <div className='max-w-4xl mx-auto'>
          <CalorieTracker
            activities={state.activities}
          />
        </div>
      </section>
      <section className='p-10 max-w-4xl mx-auto'>
        <ActivityList 
          activities={state.activities}
          dispatch={dispatch}
        />
      </section>
    </div>
    </>
  )
}

export default App
