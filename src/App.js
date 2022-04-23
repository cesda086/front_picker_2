import React, {Component, useState,useEffect} from 'react';
import Datos from './Componentes/Datos';
import "./Style/App.css";
//import "./Style/Datos.css";
import Table2 from './Componentes/Table2';
import Login from './Componentes/Login';
import {BrowserRouter, Routes,Route,Link} from 'react-router-dom';
import descarga from '../src/Style/img/picker_logo.png';
import Peticiones from './Componentes/Peticiones';
import DatosNew from './Componentes/DatosNew';
import DatosUpdate from './Componentes/DatosUpdate';
import Register from './Componentes/Register';


function App (){
  // const [ titleVariable, setTitle ] = useState('Proge');

  // useEffect(() => {
  //   document.title = titleVariable
  // }, [titleVariable]);

  // const change = (e) => {
  //   setTitle(e.target.value)
  // };
 
    return(
    <BrowserRouter>
    <header className="head">
    <nav className="nav">
       <Link className="logo" to="/"><img  className="img_logo" src={descarga}
            width="70"
            height="70"></img></Link>
       <Link className="Link" to="/">LOGIN</Link>
       <Link className="Link" to="/table">TABLA</Link>
       <Link className="Link" to="/peticiones">PETICIONES</Link>
       <Link className="Link" to="/register">REGISTRO</Link>
       
    </nav>
    </header>
    
    <Routes>
    <Route path="/" element={<Login></Login>}></Route>
    <Route path="/table" element={<Table2></Table2>}></Route>
    <Route path="/datos/:address" element={<Datos name="Andrea" lastname="Zambrano" edad="28" ></Datos>}></Route>
    <Route path="/peticiones" element={<Peticiones></Peticiones>}></Route>
    <Route path="/datosnew" element={<DatosNew></DatosNew>}></Route>
    <Route path="/datosupdate/:id" element={<DatosUpdate></DatosUpdate>}></Route>
    <Route path="/register" element={<Register></Register>}></Route>
    </Routes>
   
    </BrowserRouter>
  
    
    )
  }
export default App