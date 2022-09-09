import React from 'react'

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
}


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