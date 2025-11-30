import '../styles/forms.css'
function CvForm({}){
    return(
        <form className="cv-form">
            <label htmlFor="">field A</label>
            <input type="text" />
            <label htmlFor="">field B</label>
            <input type="text" />
            <label htmlFor="">field C</label>
            <input type="text" />
            <label htmlFor="">field D</label>
            <input type="text" />

        </form>
    )
}

export{
    CvForm,
}