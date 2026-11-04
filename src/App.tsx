import { useState } from 'react'
import './App.css'
import PaginationDemo from './components/PaginationDemo'
import DebounceSearchDemo from './components/DebounceSearchDemo';

function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
      <h1>Custom Hooks Lab</h1>

      <PaginationDemo />
      <hr />
      <DebounceSearchDemo />
    </div>
  );
}

export default App
