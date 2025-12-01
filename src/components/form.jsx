import { Fragment, useState } from 'react';
import { handlePlaceHolder } from '../modules/placeholder';
import {ButtonEl} from '../components/button.jsx';
import '../styles/forms.css';

//takes a list of fields to create with type eg: [{id, name, type},{id, name, type},{id, name, type}]
function CvForm({fieldList}){
    const[info, setinfo] = useState('');
    let hastitle = false;
    let name;
    
    //handels title
    const title =(FieldName)=>{
        hastitle ? name : name = FieldName
    }
    //cunstructs form
    const constructForm = fieldList.map(field=>{
        
        title(field.id);
        const filedKey =field.id+ '-'+ field.name
        const typeExample = handlePlaceHolder(field.type)
        return(
            <Fragment key={filedKey}>
            <label  for={field.name}>{field.name}</label>
            <input  className='input-field' 
                    id={field.name} 
                    name={field.name} 
                    type={field.type} 
                    placeholder={handlePlaceHolder(field.name)}
                    value={info}
                    onChange={(e)=>{
                        setinfo(e.target.value)
                    }}
                    />
            </Fragment>
        )
    })
    return(
        <>
        
        <form className="cv-form ">
            <h2 className='title'>{name}</h2>    
            {constructForm}
            <ButtonEl name={'edit'} className='cvBtn'/>
            <ButtonEl name={'submit'} className='cvBtn'/>
            <p>{info}</p>
        </form>
        </>
    )
}


export{
    CvForm,
}