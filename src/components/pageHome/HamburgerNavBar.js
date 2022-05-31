import React ,{useContext , useState}  from 'react'
import '../../css/HamburgerNavBar.css'
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import {UserContext} from '../../App'



function HamburgerNavBar(props) {
  const {toggle , setToggle}  = useContext(UserContext)
  const [show , setShow] = useState(true)
  const {showHamburger , setshowHamburger} = props
 
  const changeNavBar = ()=>{
    setshowHamburger(!showHamburger);
    setToggle('home')
   

    // setShow(!show)
    //  {show ? setToggle('home1') : setToggle('home')}
  }

  return (
    <div >
      <div className='navbarPosition1'>
     <GiHamburgerMenu onClick={()=> changeNavBar()}/>
          <ul className='listNavbar'>
          <li >עלינו</li>
            <li >השיעורים</li>
            <li >מסלולים</li>
            <li >ילדים ונוער</li>
            <li >לארגונים</li>
            <li >קייטנת תנועה 7-9</li>
            <li >גלריה</li>
            <li >צרו קשר</li>
            <div className='socialMedia1'>
             <FaFacebookF/>
              <FaInstagram/>
              </div>
          </ul>
      </div>
    </div>
  )
}

export default HamburgerNavBar