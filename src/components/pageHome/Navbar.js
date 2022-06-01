import React, { useState, useContext } from "react";
import "../../css/navbar.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from "../../images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import HamburgerNavBar from "./HamburgerNavBar";
import { UserContext } from "../../App";

// import {Link} from 'react-scroll'
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
            <li className="page">הצגה של כל סוגי האימון</li>
            <li className="page">תמחור מנויים</li>
            <li className="page">אירועים לחברות היי טק</li>
            <li className="page">אימונים אישיים</li>
            <li className="page">אימוני ילדים</li>
            <li className="page">הרצאות</li>
            <li className="page">מוצרים</li>
            <li className="page">עלינו</li>
            <li className="page">
              <Link className="linkStyle"  to="/gallery">גלריה</Link>
            </li>
            <li>
            
            <HashLink className="linkStyle" smooth to="#contact">
            צור קשר
            </HashLink>
            
            </li>
            
         
   {/* {///to={{ hash: "#contact" }*/} 
            <div className="socialMedia">
              <FaFacebookF />
              <FaInstagram />
            </div>
          </ul>
          
           

          <div className="hamburgarIcons">
            <div>
              <GiHamburgerMenu onClick={showNavBar}/>
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
