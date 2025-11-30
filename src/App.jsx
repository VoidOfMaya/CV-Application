import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ButtonEl} from './components/button.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h1>Simply CV</h1>
    <ButtonEl name={'edit'}/>
    <ButtonEl name={'submit'}/>
   </>
  )
}

export default App
