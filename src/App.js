import { Routes, Route , HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/pageHome/Navbar";
import GalleryImages from "./components/Gallery/GalleryImages";
import AboutUs from "./components/aboutUs/AboutUs";
import  TrainingGroups  from "./components/TrainingGroups/TrainingGroups";
import  Subscribers  from "./components/Subscribers/Subscribers";
import './css/app.css'
import React ,{useState,createContext}  from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'



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
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/Groups" element={<TrainingGroups />} />
                <Route path="/Subscribers" element={<Subscribers />} />
              
          </Routes>
          <FloatingWhatsApp phoneNumber="+972523157737"  darkMode={true} allowClickAway={true} accountName="מאמן כושר - אליק" statusMessage="בוא נדבר" chatMessage="בוא נדבר" notification={true} styles={{marginRight:"20px"}} />
  
        
      </div>
      </UserContext.Provider>
  );
}

export default App;
