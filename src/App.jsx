import { Fragment, useState } from 'react'

import './styles/App.css'
import {ButtonEl} from './components/button.jsx';
import { CvForm } from './components/form.jsx';
import { Cv } from './components/cv.jsx';

function App() {
  const [count, setCount] = useState(0)

  //Cv takes personal info{name, email, number , portfolio, git},
  //     education   {school, title, startDate, endDte}
  //     experience   {copmany, position, startDate, endDte, responsibilities}

  return (
   <div className='main-container'>
    <h1 className='header'>Simply CV</h1>
    <CvForm fieldList={[{id: 'Personal-info', name: 'Name', type:"text" },
                        {id: 'Personal-info', name: 'Email', type:"Email" },
                        {id: 'Personal-info', name: 'Phone number', type:"tel" },
                        {id: 'Personal-info', name: 'Portfolio', type:"link" },
                        {id: 'Personal-info', name: 'Git', type:"link" }]}/>

    <Cv personal={{name:'none', email:'none',  phone:'none', portfolio:'none', git:'none',}}
        experience={{copmany: 'none', position:'none' , startDate:'none', endDate:'none', responsibilities:'none'}}
        education={{school: 'none', title: 'none', startDate: 'none', endDate: 'none'}}
        />
   </div>
  )
}

export default App
