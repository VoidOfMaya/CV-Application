import { Fragment, useState } from 'react';
import { handlePlaceHolder } from '../modules/placeholder';
import {ButtonEl} from '../components/button.jsx';
import '../styles/forms.css';

//takes a list of fields to create with type eg: [{id, name, type},{id, name, type},{id, name, type}]
function CvForm({fieldList, section, data, onChange}){
 function handleChange(e){
    const {name, value} = e.target;
    const updateSection = {...data, [name]:value};
    onChange(updateSection);
 }
    let hastitle = false;
    let name;
    
    //handels title
    const title =(FieldName)=>{
        hastitle ? name : name = FieldName
    }
    //cunstructs form
    const constructForm = fieldList.map(field=>{
        
        title(section);
        const filedKey =section+ '-'+ field.name
        const typeExample = handlePlaceHolder(field.type)
        return(
            <Fragment key={filedKey}>
                <label  htmlFor={field.name}>{field.name}</label>
                <input  className='input-field' 
                        id={field.name} 
                        name={field.name} 
                        type={field.type} 
                        placeholder={handlePlaceHolder(field.name)}
                        value={data[field.name] || ""}
                        onChange={handleChange}
                        />
            </Fragment>
        )
    })
    return(
        <>
        
        <form className="cv-form ">
            <h2 className='title'>{name}</h2>    
            {constructForm}
            <ButtonEl name={'Edit'} className='cvBtn'/>
            <ButtonEl name={'Submit'} className='cvBtn'/>
        </form>
        </>
    )
}


export{
    CvForm,
}