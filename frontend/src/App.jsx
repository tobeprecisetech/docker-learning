import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage('Error connecting to backend'))
  }, [])

  return (
    <div className="App">
      <h1>React + Node Docker App</h1>
      <h2>{message}</h2>
    </div>
  )
}

export default App