import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (


    <div className="App">
        <h1> Todos</h1>
        <h2> items will persist in the local browser storage  </h2>
        <ul>
            inputs items here
            <li> Set up develop enviroment</li>
            <li>Develop website and add content</li>
            <li>Deploy to live server</li>
        </ul>
    </div>
  )
}

export default App
