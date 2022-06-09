import React ,{useContext , useState}  from 'react'
import '../../css/HamburgerNavBar.css'
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import {UserContext} from '../../App'



function HamburgerNavBar(props) {
  const {toggle , setToggle}  = useContext(UserContext)
  const [show , setShow] = useState(true)
  const {showHamburger , setshowHamburger} = props
 
  const changeNavBar = ()=>{
    setshowHamburger(!showHamburger);
    setToggle('home')
  }

  return (
    <div >
      <div className='navbarPosition1'>
       <AiOutlineClose onClick={()=> changeNavBar()}/>
      
          <ul className='listNavbar'>
          <li >עלינו</li>
          <li >אימוני קבוצות</li>
            <li >מנויים</li>
            <li >סניפים</li>
            <li >אונליין</li>
            <li >אימון אישי</li>
            <li >ארגונים</li>
            <li >גלריה</li>
            <li >צרו קשר</li>
            <div className='socialMedia1'>
            <FiYoutube/>
             <FaFacebookF/>
              <FaInstagram/>
              </div>
          </ul>
      </div>
    </div>
  )
}

export default HamburgerNavBar