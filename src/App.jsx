import { useState } from 'react'

import './styles/App.css'
import {ButtonEl} from './components/button.jsx';
import { CvForm } from './components/form.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <h1 className='header'>Simply CV</h1>
    <CvForm fieldList={[{id: 'general', name: 'Name', type:"text" },
                        {id: 'general', name: 'Email', type:"Email" },
                        {id: 'general', name: 'Phone number', type:"tel" },]}/>
    <ButtonEl name={'edit'} className='cvBtn'/>
    <ButtonEl name={'submit'} className='cvBtn'/>
   </>
  )
}

export default App
