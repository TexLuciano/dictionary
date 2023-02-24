import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Init from './components/Init'
import axios from 'axios'

const server = axios.create({
  baseURL:'http://localhost:3000/'
})

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Init/>
    </div>
  )
}

export default App
