import { Fragment} from 'react';
import { handlePlaceHolder } from '../modules/placeholder';
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
        return(
            <Fragment key={filedKey}>
                <label  className='lab-field' htmlFor={field.name}>
                    <b>{field.name}</b>
                </label>

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
            <form className="cv-form " >
                
                <h2 className='title'>add {name}</h2> 
                {constructForm}
                    
            </form>
        </>
        
    )
}


export{
    CvForm,
}