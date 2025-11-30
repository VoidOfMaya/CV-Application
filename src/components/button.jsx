function ButtonEl ({name, fn}){
    return(
        <>
            <button onClick={fn}>{name}</button>
        </>
    )
}

export{
    ButtonEl,
}