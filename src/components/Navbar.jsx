import React from 'react'
import {NavLink, useNavigate} from "react-router-dom"
import { auth } from '../firebase'

const Navbar = (props) => {

    const navigate = useNavigate()

  const cerrarSesion = () => {
    auth.signOut()
    .then(() => {
        navigate("/login")
    })
  }

  return (

    <div className="navbar navbar-dark bg-dark">
        <NavLink className ="navbar-brand" to="/navbar">AUTH</NavLink> 
        <div className="d-flex">
            <NavLink className=" btn btn-dark me-2" to="/" exact="true">
                Inicio
            </NavLink>
            {
                props.firebaseUser !== null ? (
                    <NavLink className=" btn btn-dark me-2" to="admin">
                Admin
            </NavLink>
                ) : null
            }
            
            {
                props.firebaseUser !== null ? (
                    <button className='btn btn-dark'
                            onClick={() => cerrarSesion()}
                            >
                                Cerrar sesion
                    </button>
                ) : (
                    <NavLink className=" btn btn-dark me-2" to="/login">
                    Login
                    </NavLink>
                )
            }
           

        </div>

    </div>
  )
}

export default Navbar