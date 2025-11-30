import { Fragment } from 'react';
import { handlePlaceHolder } from '../modules/placeholder';
import '../styles/forms.css';

//takes a list of fields to create with type eg: [{id, name, type},{id, name, type},{id, name, type}]
function CvForm({fieldList}){
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
            <input  name={field.name} type={field.type} placeholder={handlePlaceHolder(field.type)} />
            </Fragment>
        )
    })
    return(
        <>
        
        <form className="cv-form ">
            <h1 className='title'>{name}</h1>    
            {constructForm}
        </form>
        </>
    )
}


export{
    CvForm,
}