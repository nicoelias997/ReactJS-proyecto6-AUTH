import React from 'react'
import {auth} from "../firebase"
import {useNavigate} from "react-router-dom"

const Admin = () => {

    const user = auth.currentUser
    const navigate = useNavigate()

    React.useEffect(() => {
        if(user ){
        console.log("Existe un usuario")
        } else {
            navigate("/login")
            console.log("No existe")
        }
    } , [user, navigate])

  return (
    <div>
       <h2>Rutas protegidas</h2> 
    </div>
  )
}

export default Admin