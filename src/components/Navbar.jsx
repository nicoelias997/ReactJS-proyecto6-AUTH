import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {

  return (

    <div className="navbar navbar-dark bg-dark">
        <NavLink className ="navbar-brand" to="/navbar">AUTH</NavLink> 
        <div className="d-flex">
            <NavLink className=" btn btn-dark mr-2" to="/" exact="true">
                Inicio
            </NavLink>
            <NavLink className=" btn btn-dark mr-2" to="admin">
                Admin
            </NavLink>
            <NavLink className=" btn btn-dark mr-2" to="/login">
                Login
            </NavLink>

        </div>

    </div>
  )
}

export default Navbar