import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Form from './Form'
import Header from './Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Header />
       <Form />
    </div>
  )
}

export default App
