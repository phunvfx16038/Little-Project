import React from 'react';
import './App.css';
import Home from './Pages/Home';
// import { Router, Routes } from 'react-router-dom';
import Header from './Components/Header';

function App() {

  return (
    <div className="App">
      <Header/>
      <div 
      style={{position : "absolute", top:"80px",left:0,right:0,background: 'radial-gradient(97.91% 60.14% at 50% 50%, #FFDB7E 0%, #FF7A00 100%)'}}>
      <Home/>
      </div>
    </div>
  );
}

export default App;
