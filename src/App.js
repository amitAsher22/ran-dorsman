import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/pageHome/Navbar";
import GalleryImages from "./components/Gallery/GalleryImages";
import './css/app.css'
import React ,{useState,createContext}  from 'react'


export const UserContext = createContext();

function App() {
  const [toggle, setToggle] = useState('home')
  return (
      <UserContext.Provider value={{toggle , setToggle}}>
      <div className="app"  >
            <Navbar />
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<GalleryImages />} />
          </Routes>
      </div>
      </UserContext.Provider>
  );
}

export default App;