import { useState } from 'react'
import './App.css'
import PaginationDemo from './components/PaginationDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
      <h1>Custom Hooks Lab</h1>

      <PaginationDemo />
    </div>
  );
}

export default App
