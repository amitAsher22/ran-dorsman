import { Routes, Route , HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/pageHome/Navbar";
// import GalleryImages from "./components/Gallery/GalleryImages";
import AboutUs from "./components/aboutUs/AboutUs";
import  TrainingGroups  from "./components/TrainingGroups/TrainingGroups";
import  Subscribers  from "./components/Subscribers/Subscribers";
import Places from "./components/places/Places";
import Online from "./components/online/Online";

import './css/app.css'
import React ,{useState,createContext}  from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'
import Blog from "./components/blog/Blog";
import Person from "./components/PersonTrain/Person";




export const UserContext = createContext();

function App() {
  const [toggle, setToggle] = useState('home')

  return (
      <UserContext.Provider value={{toggle , setToggle}}>
      <div className="app" >
            <Navbar />
           
            <Routes >

                <Route path="/" element={<Home />} />
                {/* <Route path="/gallery" element={<GalleryImages />} /> */}
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/Groups" element={<TrainingGroups />} />
                <Route path="/Subscribers" element={<Subscribers />} />
                <Route path="/Places" element={<Places />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Online" element={<Online />} />
                <Route path="/personal" element={<Person />} />
               
              
          </Routes>
       
          <FloatingWhatsApp phoneNumber="+972523157737"  darkMode={true} allowClickAway={true}  notification={true} styles={{marginRight:"10px"}} />
  
        
      </div>
      </UserContext.Provider>
  );
}

export default App;
