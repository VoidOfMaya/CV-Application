import { Fragment, useState } from 'react'
import './styles/App.css';
import { CvForm } from './components/form.jsx';
import { Cv } from './components/cv.jsx';
import { data } from './modules/cvData.js';

function App() {
  const [cvData, setCvData] = useState({personal:{},experience:{},education:{}});
  //Cv takes personal info{name, email, number , portfolio, git},
  //     education   {school, title, startDate, endDte}
  //     experience   {copmany, position, startDate, endDte, responsibilities}

  return (
   <div className='main-container'>
    <h1 className='header'>Simply CV</h1>
    <div className='form-container'>
    <CvForm 
    className='personal-cv-form' 
    section={'personal info'}
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
    <CvForm 
    className='experience-cv-form' 
    section={'experience'}
    fieldList={[{name: 'company', type: 'text'},
                {name: 'position', type: 'email'},
                {name: 'startDate', type: 'date'},
                {name: 'endDate', type: 'date'},
                {name: 'responsibilities', type: 'textarea'},
            ]}
    data={cvData.experience}
    onChange={updatedData =>{
      setCvData(prev=>({
        ...prev,
        experience: updatedData
      }))
    }}
    />
    <CvForm
    className='education-cv-form' 
    section={'Education'}
    fieldList={[{name: 'school', type: 'text'},
                {name: 'subject', type: 'email'},
                {name: 'startDate', type: 'date'},
                {name: 'endDate', type: 'date'},
            ]}
    data={cvData.education}
    onChange={updatedData =>{
      setCvData(prev=>({
        ...prev,
        education: updatedData
      }))
    }}
    />
    </div>
    <Cv
        className='Cv-preview'
        personal={cvData.personal}
        experience={cvData.experience}
        education={cvData.education}
        />
    
   </div>
  )
}

export default App
