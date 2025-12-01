import { Fragment, useState } from 'react'
import './styles/App.css';
import { CvForm } from './components/form.jsx';
import { Cv } from './components/cv.jsx';
import { data } from './modules/cvData.js';

function App() {
  const [cvData, setCvData] = useState({personal:{},
                                        experience:{},
                                        education:{}});
  

  //Cv takes personal info{name, email, number , portfolio, git},
  //     education   {school, title, startDate, endDte}
  //     experience   {copmany, position, startDate, endDte, responsibilities}

  return (
   <div className='main-container'>
    <h1 className='header'>Simply CV</h1>
    <CvForm 
    section={'personal'}
    fieldList={[{name: 'name', type: 'text'},
                {name: 'email', type: 'email'},
                {name: 'phone', type: 'tel'},
                {name: 'portfolio', type: 'text'},
                {name: 'git', type: 'text'},
            ]}
    data={cvData.personal}
    onChange={updatedData =>{
      setCvData(prev=>({
        ...prev,
        personal: updatedData
      }))
    }}
    />

    <Cv personal={cvData.personal}
        experience={cvData.experience}
        education={cvData.education}
        />
   </div>
  )
}

export default App
