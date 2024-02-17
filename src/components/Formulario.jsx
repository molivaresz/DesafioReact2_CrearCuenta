import { useState } from 'react'

const Formulario = (props) => {
    //Estados del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contrasena1, setContrasena1] = useState('');
    const [contrasena2, setContrasena2] = useState('');

    const validarCampos = (e) => {
        e.preventDefault()
        //Validación
        if(nombre != '' && email != '' && contrasena1 != '' && contrasena2 != '') {
            if (email.includes('@')) {
                if (contrasena1 === contrasena2) {
                    return
                } else {
                    alert('Las contraseñas no son iguales')
                }
            } else {
                alert('Formato de correo no valido, falta @')
            }
        } else {
            alert('Todos los campos son obligatorios')
        }
    }


    return (
        <>
        <form className="formulario" onSubmit={validarCampos}>
            <div className="form-group">
                <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                className="form-control"
                onChange={(event) => setNombre(event.target.value)}
                value={nombre}
                />
            </div>
            <div className="form-group">
                <input
                type="text"
                name="email"
                placeholder="tuemail@ejemplo.com"
                className="form-control"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                />
            </div>
            <div className="form-group">
                <input
                type="password"
                name="Contrasena1"
                placeholder="Contraseña"
                className="form-control"
                onChange={(event) => setContrasena1(event.target.value)}
                value={contrasena1}
                />
            </div>
            <div className="form-group">
                <input
                type="password"
                name="Contrasena2"
                placeholder="Confirma tu contraseña"
                className="form-control"
                onChange={(event) => setContrasena2(event.target.value)}
                value={contrasena2}
                />
            </div>
            <button type="submit" className="btn btn-success">Registrarse</button>
        </form>
        </>

    )
}

    export default Formulario