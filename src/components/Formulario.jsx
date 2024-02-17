const Formulario = (props) => {
    return (
        <>
        <form className="formulario">
            <div className="form-group">
                <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                className="form-control"
                />
            </div>
            <div className="form-group">
                <input
                type="text"
                name="email"
                placeholder="tuemail@ejemplo.com"
                className="form-control"
                />
            </div>
            <div className="form-group">
                <input
                type="password"
                name="Contrasena1"
                placeholder="Contraseña"
                className="form-control"
                />
            </div>
            <div className="form-group">
                <input
                type="password"
                name="Contrasena2"
                placeholder="Confirma tu contraseña"
                className="form-control"
                />
            </div>
            <button type="submit" className="btn btn-success">Enviar</button>
        </form>
        </>

    )
}

    export default Formulario