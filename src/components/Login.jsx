import React from 'react'
import {auth, dataBase} from "../firebase.js"

const Login = () => {

    const [email, setEmail] = React.useState("")
    const [pass, setPass] = React.useState("")
    const [error, setError] = React.useState(null)
    const [esRegistro, setEsRegistro] = React.useState(true)

    const procesarDatos = e => {
        e.preventDefault()
        if(!email.trim()){
            setError("Ingrese email")
            return
        }
    
        if(!pass.trim()){
            setError("Ingrese pass")
            return
    }
        if(pass.length < 6){
            setError("Pass mayor o igual a 6 caracteres")
            return
        }
        setError(null)

        if(esRegistro){
            registrar()
        }
}

    const registrar = React.useCallback( async () => {
        try{
         const res = await auth.createUserWithEmailAndPassword(email, pass)
         await dataBase.collection("usuarios").doc(res.user.uid).set({//creamos la coleccion
            email: res.user.email,
            uid: res.user.uid
         }
         ) 
         setEmail("")
         setPass("")
         setError(null)
         console.log(res.user)
        } catch(error){
            if(error.code === "auth/invalid-email"){
            setError("Email no valido")
            }
            if(error.code === "auth/email-already-in-use"){
            setError("Email ya registrado")
            }
        }
    }, [email,pass])


  return (
    <div className='mt-5'>
        <h3 className="text-center">
            {
                esRegistro ? "Registro de usuario" : "Login de acceso"
            }
        </h3>
        <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-xl-4">

                {
                error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                    )
                }

                <form onSubmit={procesarDatos}>
                    <input type="email" 
                    className='form-control mb-2' 
                    placeholder='Ingrese un email' 
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    />
                    <input type="password" 
                    className='form-control mb-2' 
                    placeholder='Ingrese un password'
                    onChange={e => setPass(e.target.value)}
                    value={pass}

                    />
                    <div className='row'>

                    <button 
                    className='btn btn-dark btn-lg btn-block mb-2'
                    type='submit'>
                        {
                            esRegistro ? "Registrarse" : "Iniciar sesion"
                        }
                    </button>
                    <button 
                    className="btn btn-info btn-sm btn-block text-white"
                    type='button'
                    onClick={()=> setEsRegistro(!esRegistro)}   
                        >
                            {
                                esRegistro ? "¿Ya estas registrado?" : "¿No tienes cuenta?"
                            }
                    </button>

                    </div>

                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Login