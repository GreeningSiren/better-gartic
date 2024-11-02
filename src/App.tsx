import { useState } from 'react'
import './App.css'

function App() {
  const [url, setUrl] = useState('')
  const [ready, setReady] = useState(false)


  return !ready ? (
    <>
      <input onChange={(e) => setUrl(e.target.value)}></input>
      <button onClick={() => setReady(true)}>Go</button>
    </>
  ) : (
    <>
      <iframe src={url} style={{ width: '100%', height: '100%' }} />
    </>
  )
}

export default App
