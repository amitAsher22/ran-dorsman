import React, { useState, useContext   } from "react";
import "../../css/navbar.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import logo from "../../images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerNavBar from "./HamburgerNavBar";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';




function Navbar() {
  const [showHamburger, setshowHamburger] = useState(true);
  const { toggle, setToggle } = useContext(UserContext);

  const showNavBar = () => {
    setshowHamburger(!showHamburger);
    setToggle("home1");
  };


 

  return (
    <div>
      {showHamburger ? (
        <div>
          <ul className="banbarPosition">
            <Link to="/">
              <img src={logo} alt="logo" className="logoRan" />
            </Link>
            <li className="page">
            <Link className="linkStyle"  to="/AboutUs">עלינו</Link>
            </li>
            <li className="page">
            <Link className="linkStyle" to="/Groups">אימוני קבוצות</Link>
            </li> 
            <li className="page">
            <Link className="linkStyle" to="/Subscribers">מנויים</Link>
            </li>
            <li className="page">
            <Link className="linkStyle" to="/Places">סניפים</Link>
            </li>
            <li className="page">אונליין</li>
            <li className="page">אימון אישי</li>
            <li className="page">ארגונים</li>
            <li className="page">בלוג</li>
            <li>
           <HashLink className="linkStyle" smooth to="/#ContactUs">
                 צור קשר
            </HashLink>

            </li>
            
         

            <div className="socialMedia">
              <FiYoutube className="svgIcon"/>
              <FaFacebookF className="svgIcon"/>
              <FaInstagram className="svgIcon"/>
            </div>
          </ul>
          
           

          <div className="hamburgarIcons">
            <div className="hamburgarIcons2">
              <GiHamburgerMenu onClick={showNavBar}/>
              <FiYoutube/>
              <FaInstagram />
              <FaFacebookF />
            </div>
            <div>
              <img src={logo} alt="logo" className="logoRan" />
            </div>
          </div>
        </div>
      ) : (
        <HamburgerNavBar
          setshowHamburger={setshowHamburger}
          showHamburger={showHamburger}
        />
      )}
    </div>
  );
}

export default Navbar;
