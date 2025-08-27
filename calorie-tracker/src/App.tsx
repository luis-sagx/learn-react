import './App.css'
import Form from './components/Form'

function App() {

  return (
    <>
    <header className='bg-emerald-600'>
      <h1 className='py-5 text-4xl font-extrabold text-center text-white'>Contador de calorias</h1>
    </header>
    <section className='bg-gradient-to-br from-emerald-100 to-teal-200'>
      <div className='max-w-4xl px-10 py-20 mx-auto'>
        <Form />
      </div>
    </section>
    </>
  )
}

export default App
