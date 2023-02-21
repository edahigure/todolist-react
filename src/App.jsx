import { useState } from 'react'
import './App.css'
import TodosLogic from './components/TodosLogic';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <h1> Todos</h1>
        <h2> items will persist in the local browser storage  </h2>

        <TodosLogic />
    </div>
  )
}

export default App
