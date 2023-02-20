import { useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <h1> Todos</h1>
        <h2> items will persist in the local browser storage  </h2>
        <ul>
             Items here
             <TodoItem title="Set up develop enviroment" />
             <TodoItem title="Develop website and add content" />
             <TodoItem title="Deploy to live server" />
        </ul>
    </div>
  )
}

export default App
