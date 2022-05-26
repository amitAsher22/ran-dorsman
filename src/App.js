import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/pageHome/Navbar";
import './css/app.css'

function App() {
  return (
      <div className="app" >
            <Navbar/>
            <Routes >
                <Route path="/" element={<Home/>} />
          </Routes>
      </div>
  );
}

export default App;
