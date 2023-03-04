import './App.css'
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Marathi from './Components/Marathi';
import HindiSong from './Components/HindiSong';
import EnglishSong from './Components/EnglishSong';


function App() {

  return (
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          <Route exact path="/Marathi" element={<Marathi />} >            
          </Route>
          <Route exact path="/HindiSong" element={<HindiSong />} >            
          </Route>
          <Route exact path="/EnglishSong" element={<EnglishSong />} >            
          </Route>
        </Routes>
        
      </BrowserRouter>
      
    
  )
}

export default App;
