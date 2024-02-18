import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alerta from './Alert';
import { useState } from 'react'

const Formulario = (props) => {
    //Estados del formulario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contrasena1, setContrasena1] = useState('');
    const [contrasena2, setContrasena2] = useState('');
    const [error, setError] = useState(props.msgerror1)
    const [colorerror, setColorError] = useState('danger')

    const validarCampos = (e) => {
        e.preventDefault()
        //Validación
        setError(props.msgexito)
        setColorError('success')
        if(nombre != '' && email != '' && contrasena1 != '' && contrasena2 != '') {
            if (email.includes('@')) {
                if (contrasena1 === contrasena2) {
                    setNombre('')
                    setEmail('')
                    setContrasena1('')
                    setContrasena2('')
                    return
                } else {
                    setError(props.msgerror3)
                    setColorError('danger')
                }
            } else {
                setError(props.msgerror2)
                setColorError('danger')
            }
        } else {
            setError(props.msgerror1)
            setColorError('danger')
        }
    }

    return (
        <>
        <Container>
            <Row>
                <Col>
                    <form className="formulario" onSubmit={validarCampos}>
                        <div className="form-group pb-2">
                            <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            className="form-control"
                            onChange={(event) => setNombre(event.target.value)}
                            value={nombre}
                            />
                        </div>
                        <div className="form-group pb-2">
                            <input
                            type="text"
                            name="email"
                            placeholder="tuemail@ejemplo.com"
                            className="form-control"
                            onChange={(event) => setEmail(event.target.value)}
                            value={email}
                            />
                        </div>
                        <div className="form-group pb-2">
                            <input
                            type="password"
                            name="Contrasena1"
                            placeholder="Contraseña"
                            className="form-control"
                            onChange={(event) => setContrasena1(event.target.value)}
                            value={contrasena1}
                            />
                        </div>
                        <div className="form-group pb-2">
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
                </Col>
            </Row>
            <Row>
                <Col className='p-2'>
                    <Alerta 
                    msgalerta={error}
                    coloralerta={colorerror}
                    />
                </Col>
            </Row> 
        </Container>

        </>

    )
}

    export default Formulario