import React, { useContext, useState } from "react";
import "../../css/HamburgerNavBar.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { UserContext } from "../../App";
import data from "./HamburgerNavBar.json";
import { Link } from "react-router-dom";

function HamburgerNavBar(props) {
  const { toggle, setToggle } = useContext(UserContext);
  const [show, setShow] = useState(true);
  const { showHamburger, setshowHamburger } = props;

  const changeNavBar = () => {
    setshowHamburger(!showHamburger);
    setToggle("home");
  };

  return (
    <div>
      <div className="navbarPosition1">
        <AiOutlineClose onClick={() => changeNavBar()} />

        <ul className="listNavbar">
          <Link
            className="linkStyle"
            to="/AboutUs"
            onClick={() => changeNavBar()}
          >
            <li>עלינו</li>
          </Link>
          <Link
            className="linkStyle"
            to="/Groups"
            onClick={() => changeNavBar()}
          >
            <li>אימוני קבוצות</li>
          </Link>
          <Link
            className="linkStyle"
            to="/Subscribers"
            onClick={() => changeNavBar()}
          >
            <li>מנויים</li>
          </Link>
          <Link
            className="linkStyle"
            to="/Places"
            onClick={() => changeNavBar()}
          >
            <li>סניפים</li>
          </Link>
          <Link
            className="linkStyle"
            to="/Online"
            onClick={() => changeNavBar()}
          >
            <li>אונליין</li>
          </Link>
          <Link
            className="linkStyle"
            to="/personal"
            onClick={() => changeNavBar()}
          >
            <li>אימון אישי</li>
          </Link>
          <Link className="linkStyle" to="/" onClick={() => changeNavBar()}>
            <li>ארגונים</li>
          </Link>
          <Link className="linkStyle" to="/Blog" onClick={() => changeNavBar()}>
            <li>בלוג</li>
          </Link>
          <Link
            className="linkStyle"
            smoot
            to="/#ContactUs"
            onClick={() => changeNavBar()}
          >
            <li>צרו קשר</li>
          </Link>

          <div className="socialMedia1">
            <FiYoutube />
            <FaFacebookF />
            <FaInstagram />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerNavBar;
