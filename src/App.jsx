// import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Marathi from './Components/Marathi';
import CurrentSong from './Components/CurrentSong';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route exact path="/Marathi" element={<Marathi />} >            
          </Route>
        </Routes>
        
      </BrowserRouter>
      
    </div>
  )
}

export default App
