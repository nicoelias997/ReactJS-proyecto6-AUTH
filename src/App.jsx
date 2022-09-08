import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  return (
    <Router>
    <div className="container mt-5">
      <h1>Probando AUTH</h1>  
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact element={"inicio"}>
        </Route>
        <Route path="/login" element={"login"}>
        </Route>
        <Route path="/admin" element={"admin"}>
        </Route>
      </Routes>   
    </div>
  </Router>
  );
}

export default App;
