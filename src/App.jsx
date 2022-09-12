import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Admin from "./components/Admin";

import {auth} from "./firebase"


function App() {

  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user){
        setFirebaseUser(user)
      } else {
        setFirebaseUser(null)
      }
    })
  })

  return firebaseUser !== false ?(
    <Router>
    <div className="container mt-5">
      <h1>Probando AUTH</h1>  
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact element={"inicio"}>
        </Route>
        <Route path="/login" element={<Login></Login>}>
        </Route>
        <Route path="/admin" element={<Admin></Admin>}>
        </Route>
      </Routes>   
    </div>
  </Router>
  ) : 
  <p>Loading...</p>
  ;
}

export default App;
