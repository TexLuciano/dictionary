import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Init from './components/Init'
import axios from 'axios'
import { Render } from './components/render/render'

const server = axios.create({
  baseURL:'http://localhost:3000/'
})

function App() {
  const [render, setRender] = useState(false);

  return (
    <div className="App">
      <Init />
    </div>
  )
}

export default App
