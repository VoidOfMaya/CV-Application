import { Fragment } from "react";
import '../styles/cv.css';
// takes personal info{name, email, number , portfolio, git},
//       education   {school, title, startDate, endDte}
//       experience   {copmany, position, startDate, endDte, responsibilities}
function Cv({personal, experience, education}){
    return(
        <div className="cv-div">
            <h2>{personal.name}</h2>
            <h3>Personal info:</h3>
            <ul>
                <li> <b>protfolio:</b> {personal.portfolio}</li>
                <li><b>Git:</b> {personal.git}</li>
                <li><b>Email:</b> {personal.email}</li>
                <li><b>Phone number:</b> {personal.phone}</li>
            </ul>
            <br></br>
            <h3 className="experience-container">Experience:</h3>
                <div><b>worked at</b> {experience.company} - {experience.position} - <b>from</b> {experience.startDate} <b>to</b> {experience.endDate}</div>
                <p>{experience.responsibilities}</p>
            <br></br>
            <h3 className="education-container">Education:</h3>
            <ul>
                <li> <b>studied with</b> {education.school} - {education.subject} <b>from</b>{education.startDate} <b>to</b> {education.endDate}</li>
            </ul>

        </div>
    )
}

export{
    Cv
}