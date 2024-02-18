import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './components/Registro'
import { useState } from 'react'

function App() {
  const [msgIni, setMsgini] = useState('Favor, completar los campos para registrarse')
  const [msgexito, setMsgexito] = useState('El registro ha sido exitoso')
  const [msgerror1, setMsgerror1] = useState('Todos los campos son obligatorios')
  const [msgerror2, setMsgerror2] = useState('Formato de correo no valido, falta @')
  const [msgerror3, setMsgerror3] = useState('Las contraseñas no son iguales')

  return (
    <>
      <Registro
      msgIni={msgIni}
      msgexito={msgexito}
      msgerror1={msgerror1}
      msgerror2={msgerror2}
      msgerror3={msgerror3}
      />
    </>
  )
}

export default App