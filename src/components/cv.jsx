import { Fragment } from "react";
import '../styles/cv.css';
// takes personal info{name, email, number , portfolio, git},
//       education   {school, title, startDate, endDte}
//       experience   {copmany, position, startDate, endDte, responsibilities}
function Cv({personal, experience, education}){
    return(
        <div className="cv-div">
            <h2 className="my-name">{personal.name}</h2>
            <h3>Personal info:</h3>
            <ul className="top-ul">
                <li> <b>protfolio:</b> {personal.portfolio}</li>
                <li><b>Git:</b> {personal.git}</li>
                <li><b>Email:</b> {personal.email}</li>
                <li><b>Phone number:</b> {personal.phone}</li>
            </ul>
            
            <h3 >Experience:</h3>
                <div className="experience-info">
                <b>worked at</b> {experience.company} - {experience.position} - <b>from</b> {experience.startDate} <b>to</b> {experience.endDate}</div>
                <p>{experience.responsibilities}</p>
            
            <h3 >Education:</h3>
            <div className="education-info"> 
                <b>studied with</b> {education.school} - {education.subject} <b>from</b>{education.startDate} <b>to</b> {education.endDate}
            </div>
            

        </div>
    )
}

export{
    Cv
}