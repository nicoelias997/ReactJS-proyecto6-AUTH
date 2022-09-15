import React from 'react'
import {auth} from "../firebase"
import {useNavigate} from "react-router-dom"
import Firestore from './Firestore'

const Admin = () => {

    const user = auth.currentUser
    const navigate = useNavigate()

    const [usuario, setUsuario] = React.useState(null)

    React.useEffect(() => {
        if(user){

        console.log("Existe un usuario")
        } else {
            navigate("/login")
            console.log("No existe")
        }
    } , [user, navigate])

  return (
    <div className='container mt-5'>
       <h2 className='text-center'>Rutas protegidas</h2> 
       {
        user && (
          <Firestore user={user}></Firestore>
        )
       }
    </div>
  )
}

export default Admin