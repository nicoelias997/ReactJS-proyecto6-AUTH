import React from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Reset = () => {

  const navigate = useNavigate()

  const [email, setEmail] = React.useState("")
  const [error, setError] = React.useState(null)

  const procesarDatos = e => {
    e.preventDefault()
    if(!email.trim()){
        setError("Ingrese email")
        return
    }
    setError(null)
    recuperarContraseña()
}

  const recuperarContraseña = React.useCallback( async ()=> {
      try{
        await auth.sendPasswordResetEmail(email)
        navigate("/login")
        console.log("Correo enviado")
      } 
      catch(error){
        setError(error.message)
      }
  }, [email,navigate])

  return (
    <div className='mt-5'>
    <h3 className="text-center">
        Reiniciar contraseña
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
               

                <button 
                className='btn btn-dark col-12 mb-2'
                type='submit'
                onClick={() => recuperarContraseña()}>
                    Reiniciar contraseña 
                </button>
              
            </form>
        </div>
    </div>
    </div>
  )
}

export default Reset