import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Event from './Pages/Event';
import Detail from './Pages/Detail';

function App() {

  return (
    <div className="App">
      <Header/>
      <div 
      style={{position : "absolute", top:"80px",left:0,right:0,background: 'radial-gradient(97.91% 60.14% at 50% 50%, #FFDB7E 0%, #FF7A00 100%)'}}>
      <Routes>
      <Route path= "/" element={<Home/>}/>
      <Route path= "event" element={<Event/>}/>
      <Route path= "event/:id" element={<Detail/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
