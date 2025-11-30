import '../styles/button.css'

function ButtonEl ({name, fn}){
    return(
        <>
            <button className='cv-btn' onClick={fn}>{name}</button>
        </>
    )
}

export{
    ButtonEl,
}