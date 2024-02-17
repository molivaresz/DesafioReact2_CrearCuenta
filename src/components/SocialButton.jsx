const SocialButton = (props) => {
    return (
        <>
        <h1>Crea una cuenta</h1> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px"><title>{props.iconsName1}</title><path d={props.iconsSVG1}/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px"><title>{props.iconsName2}</title><path d={props.iconsSVG2}/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px"><title>{props.iconsName3}</title><path d={props.iconsSVG3}/></svg>
        <br />
        <br />
        <h5>O usa tu email para registrarte</h5>
        </>
    )
}

    export default SocialButton