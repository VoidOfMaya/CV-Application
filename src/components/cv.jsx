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
                <li> protfolio: {personal.portfolio} . Git: {personal.git}</li>
                <li>Email: {personal.email}</li>
                <li>Phone number: {personal.phone}</li>
            </ul>
            <br></br>
            <h3>Experience:</h3>
                <div>worked at {experience.company} - {experience.position} - from {experience.startDate} to {experience.endDate}</div>
            <br></br>
            <h3>Education:</h3>
            <ul>
                <li> studied with {education.school} - {education.title} from{education.startDate} to {education.endDate}</li>
            </ul>

        </div>
    )
}

export{
    Cv
}